import React from "react";
import Delete from "./ActionItems/Delete";
import VisualizationSwitcher from "./ActionItems/VisualizationSwitcher";
import ColumnVisible from "./ActionItems/ColumnVisible";
import { useSelector } from "react-redux";
import Export from "./ActionItems/Export";

export default () => {
  const isSelectedRows = useSelector(
    state => !!state.table.selectedRows.length
  );

  return (
    <div>
      <div className="d-flex flex-wrap py-1">
        <VisualizationSwitcher />
      </div>
      <div>
        <ColumnVisible />
      </div>
      <div className="d-flex flex-wrap py-1" style={{minHeight: 30}}>
        <Export/>
        {isSelectedRows ? <Delete /> : null}
      </div>
    </div>
  );
};
