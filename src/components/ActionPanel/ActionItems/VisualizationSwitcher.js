import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onToggleVisualization } from "../../../store/action/table";

export default () => {
  const visualization = useSelector(state => state.table.isVisualization);
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            dispatch(onToggleVisualization());
          }}
          checked={visualization}
        />
        Визуализирование
      </label>
    </div>
  );
};
