import React from "react";
import Delete from "./ActionItems/Delete";
import Sort from "./ActionItems/Sort";
import Filter from "./ActionItems/Filter";
import SelectList from "./ActionItems/SelectList";
import SelectButton from "./ActionItems/SelectButton";
import VisualizationSwitcher from "./ActionItems/VisualizationSwitcher";
import ColumnVisible from "./ActionItems/ColumnVisible";
import {useSelector} from "react-redux";

export default () => {
  const isSelectedRows = useSelector(state=>!!state.table.selectedRows.length);
  const isSelectedColumn = useSelector(state=>!!state.table.selectedColumns.length);
  return (
    <div>
      <div className="d-flex flex-wrap py-1">
        <VisualizationSwitcher />
      </div>
      <div>
        <ColumnVisible  />
      </div>
      <div className="d-flex flex-wrap py-1">
        {isSelectedRows ? null: <Filter />}
        {isSelectedColumn ?<SelectButton />: null}
        {isSelectedColumn ?<Sort /> : null}
        {isSelectedRows ? <Delete /> : null}
      </div>
      <div className="d-flex flex-wrap py-1" style={{visibility:'hidden'}}>
        <SelectList />
      </div>
    </div>
  );
};
