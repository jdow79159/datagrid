import React from "react";
import Delete from "./ActionItems/Delete";
import Sort from "./ActionItems/Sort";
import Filter from "./ActionItems/Filter";
import SelectList from "./ActionItems/SelectList";
import SelectButton from "./ActionItems/SelectButton";
import VisualizationSwitcher from "./ActionItems/VisualizationSwitcher";
import ColumnVisible from "./ActionItems/ColumnVisible";
import {headers} from "./../../data";
export default () => {
  const headersList = headers.map(el=>el.title);
  return (
    <div>
      <div className="d-flex">
        <VisualizationSwitcher />
      </div>
      <div className="d-flex">
        <ColumnVisible list={headersList} />
      </div>
      <div className="d-flex">
        <Delete />
        <Sort />
        <Filter />
        <SelectButton />
      </div>
      <div className="d-flex">
        <SelectList />
      </div>
    </div>
  );
};
