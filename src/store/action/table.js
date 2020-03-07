import {TOGGLE_VISIBLE_COLUMN, TOGGLE_VISUALIZATION} from "../types";

export const onToggleVisualization = ()=>({
  type:TOGGLE_VISUALIZATION
});

export const onToggleVisibleColumn = idx =>({
  type: TOGGLE_VISIBLE_COLUMN,
  payload: idx
});
