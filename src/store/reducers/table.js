import { data, headers } from "./../../data";
import {
  MULTI_SELECT_COLUMN_OFF,
  MULTI_SELECT_COLUMN_ON,
  SELECT_COLUMN,
  SELECT_ROW,
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
    currentHeaders: [...headers].map((el, idx) => ({
      ...el,
      visible: true,
      width: widthColumn[idx]
    })),
    currentData: [...data],
    isVisualization: true,
    selectedColumns: [],
    selectedRows: [],
    isMultiSelectColumn: false
  };
  return base;
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
        ],
        currentData: [...state.currentData]
      };
    case SELECT_COLUMN:
      if (state.selectedColumns.includes(action.payload)) {
        return {
          ...state,
          selectedColumns: [
            ...state.selectedColumns.filter(el => el !== action.payload)
          ]
        };
      } else if (state.isMultiSelectColumn) {
        return {
          ...state,
          selectedColumns: [...state.selectedColumns, action.payload]
        };
      } else
        return {
          ...state,
          selectedColumns: [action.payload]
        };
    case MULTI_SELECT_COLUMN_ON:
      return {
        ...state,
        isMultiSelectColumn: true
      };
    case MULTI_SELECT_COLUMN_OFF:
      return {
        ...state,
        isMultiSelectColumn: false
      };
    case SELECT_ROW: {
      if (state.selectedRows.includes(action.payload)) {
        return {
          ...state,
          selectedRows: [
            ...state.selectedRows.filter(el => el !== action.payload)
          ]
        };
      } else {
        return {
          ...state,
          selectedRows: [
            ...state.selectedRows, action.payload
          ]
        };
      }
    }
    default:
      return state;
  }
};
