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

export const onToggleVisualization = () => ({
  type: TOGGLE_VISUALIZATION
});

export const onToggleVisibleColumn = idx => ({
  type: TOGGLE_VISIBLE_COLUMN,
  payload: idx
});

export const multiSortOn = () => ({
  type: MULTI_SORT_ON
});

export const multiSortOff = () => ({
  type: MULTI_SORT_OFF
});

export const onSelectRow = id => ({
  type: SELECT_ROW,
  payload: id
});

export const onDeleteSelectedRows = () => ({
  type: DELETE_SELECTED_ROWS
});

export const onToggleSortedColumn = id => ({
  type: TOGGLE_SORTED_COLUMN,
  payload: id
});

export const onSetFilter = (id, filterValue) => ({
  type: SET_FILTER,
  payload: { id, filterValue }
});
