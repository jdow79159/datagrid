import {
  MULTI_SELECT_COLUMN_OFF,
  MULTI_SELECT_COLUMN_ON,
  SELECT_COLUMN, SELECT_ROW,
  TOGGLE_VISIBLE_COLUMN,
  TOGGLE_VISUALIZATION
} from "../types";

export const onToggleVisualization = ()=>({
  type:TOGGLE_VISUALIZATION
});

export const onToggleVisibleColumn = idx =>({
  type: TOGGLE_VISIBLE_COLUMN,
  payload: idx
});

export const onSelectColumn = id =>({
  type: SELECT_COLUMN,
  payload: id
});

export const multiSelectColumnOn = () =>({
  type: MULTI_SELECT_COLUMN_ON
});

export const multiSelectColumnOff = () =>({
  type: MULTI_SELECT_COLUMN_OFF
});

export const onSelectRow = idx =>({
  type: SELECT_ROW,
  payload: idx
});
