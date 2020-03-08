import React from "react";
import Delete from "./ActionItems/Delete";
import Sort from "./ActionItems/Sort";
import Filter from "./ActionItems/Filter";
import SelectList from "./ActionItems/SelectList";
import SelectButton from "./ActionItems/SelectButton";
import VisualizationSwitcher from "./ActionItems/VisualizationSwitcher";
import ColumnVisible from "./ActionItems/ColumnVisible";

export default () => {

  return (
    <div>
      <div className="d-flex flex-wrap py-1">
        <VisualizationSwitcher />
      </div>
      <div>
        <ColumnVisible  />
      </div>
      <div className="d-flex flex-wrap py-1">
        <Delete />
        <Sort />
        <Filter />
        <SelectButton />
      </div>
      <div className="d-flex flex-wrap py-1" style={{visibility:'hidden'}}>
        <SelectList />
      </div>
    </div>
  );
};
