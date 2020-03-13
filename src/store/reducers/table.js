import orderBy from "lodash/orderBy";
import { data, headers } from "./../../data";
import {
  DELETE_SELECTED_ROWS,
  MULTI_SORT_OFF,
  MULTI_SORT_ON,
  SELECT_ROW,
  SET_FILTER,
  TOGGLE_SORTED_COLUMN,
  TOGGLE_VISIBLE_COLUMN,
  TOGGLE_VISUALIZATION
} from "../types";
import { widthColumn } from "../../config";

const initialState = () => {
  const base = {
    initialHeaders: [...headers].map((el, idx) => ({
      ...el,
      visible: true,
      width: widthColumn[idx]
    })),
    initialData: [...data],
    filteredData: [...data],
    currentHeaders: [...headers].map((el, idx) => ({
      ...el,
      // title : "Title"
      // type: "boolean", "string", "number", "date" from data.json
      // id: "" from data.json
      visible: true,
      width: widthColumn[idx],
      filterValue: [],
      sorted: "" // options: "increase", "decrease",  ""
    })),
    currentData: [...data],
    isVisualization: true,
    sortOrder: [], // [idHeader1, idHeader2] queue
    selectedRows: [],
    isMultiSelectColumn: false,
    isMultiSort: false
  };
  return base;
};
const appFilter = (data, headers) => {
  const filterTypes = headers.map(el => el.type);
  const result = filterTypes.reduce((prevData, type, idx) => {
    if (type === "string") {
      return prevData.filter(el => {
        if (headers[idx].filterValue.length) {
          return el.data[idx].includes(headers[idx].filterValue[0]);
        } else return true;
      });
    }
    if (type === "boolean") {
      return prevData.filter(el => {
        if (headers[idx].filterValue.length) {
          if (headers[idx].filterValue.length===2) return false;
          return el.data[idx]!==headers[idx].filterValue[0];
        } else return true;
      });
    }
    if (type === "number") {
      return prevData.filter(el => {
        if (headers[idx].filterValue.length) {
          return +el.data[idx] >= +headers[idx].filterValue[0] && +el.data[idx] < +headers[idx].filterValue[1];
        } else return true;
      });
    }
    if (type === "enum") {
      return prevData.filter(el => {
        if (headers[idx].filterValue.length) {
          return !headers[idx].filterValue.includes(el.data[idx]);
        } else return true;
      });
    }
    if (type === "date") {
      return prevData.filter(el => {
        if (headers[idx].filterValue.length) {
          return el.data[idx] >= headers[idx].filterValue[0] && el.data[idx] < headers[idx].filterValue[1];
        } else return true;
      });
    }
    else return prevData;
  }, data);
  return result;
};
export default (state = initialState(), action) => {
  switch (action.type) {
    case TOGGLE_VISUALIZATION:
      return {
        ...state,
        isVisualization: !state.isVisualization
      };
    case TOGGLE_VISIBLE_COLUMN:
      return {
        ...state,
        currentHeaders: [
          ...state.currentHeaders.map((el, idx) => {
            if (idx === action.payload) {
              el.visible = !el.visible;
            }
            return el;
          })
        ]
      };
    case MULTI_SORT_ON:
      return {
        ...state,
        isMultiSort: true
      };
    case MULTI_SORT_OFF:
      return {
        ...state,
        isMultiSort: false
      };
    case SELECT_ROW:
      if (state.selectedRows.includes(action.payload)) {
        return {
          ...state,
          selectedRows: [
            ...state.selectedRows.filter(el => el !== action.payload)
          ],
        };
      } else {
        return {
          ...state,
          selectedRows: [...state.selectedRows, action.payload],
        };
      }
    case DELETE_SELECTED_ROWS: {
      return {
        ...state,
        currentData: state.currentData.filter(el => !state.selectedRows.includes(el.id)),
        initialData: state.initialData.filter(el => !state.selectedRows.includes(el.id)),
        selectedRows: []
      };
    }
    case TOGGLE_SORTED_COLUMN: {
      let sortOrder;
      const headers = state.currentHeaders;
      if (state.isMultiSort) {
        if (!state.sortOrder.includes(action.payload)) {
          sortOrder = [...state.sortOrder, action.payload];
        } else {
          sortOrder = [...state.sortOrder];
        }
      } else {
        sortOrder = [action.payload];
      }
      const sortOrderIndexes = sortOrder.map(el =>
        headers.findIndex(item => item.id === el)
      );
      const currentHeaders = headers.map(el => {
        if (el.id === action.payload) {
          switch (el.sorted) {
            case "":
              el.sorted = "asc";
              break;
            case "asc":
              el.sorted = "desc";
              break;
            case "desc":
              el.sorted = "";
              break;
            default:
              el.sorted = "";
          }
        } else if (!state.isMultiSort) {
          el.sorted = "";
        }
        return el;
      });
      return {
        ...state,
        sortOrder,
        currentHeaders,
        currentData: orderBy(
          appFilter(state.initialData, currentHeaders),
          sortOrderIndexes
            .filter(idx => currentHeaders[idx].sorted)
            .map(idx => item => item.data[idx]),
          sortOrderIndexes
            .filter(idx => currentHeaders[idx].sorted)
            .map(idx => currentHeaders[idx].sorted)
        ),
        selectedRows: []
      };
    }
    case SET_FILTER: {
      const currentHeaders = state.currentHeaders.map(el => {
        if (el.id === action.payload.id) {
          el.filterValue = [...action.payload.filterValue];
        }
        return el;
      });
      const sortOrderIndexes = state.sortOrder.map(el =>
        headers.findIndex(item => item.id === el)
      );
      return {
        ...state,
        currentHeaders,
        currentData: orderBy(
          appFilter(state.initialData, currentHeaders),
          sortOrderIndexes
            .filter(idx => currentHeaders[idx].sorted)
            .map(idx => item => item.data[idx]),
          sortOrderIndexes
            .filter(idx => currentHeaders[idx].sorted)
            .map(idx => currentHeaders[idx].sorted)
        ),
        selectedRows: []
      };
    }

    default:
      return state;
  }
};
