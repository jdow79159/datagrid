import React from "react";
import "./SortColumn.css";
import { rowHeight } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { onToggleSortedColumn } from "../../store/action/table";

export default ({ id }) => {
  const sorted = useSelector(
    state => state.table.currentHeaders.find(el => el.id === id).sorted
  );
  const sortOrderArr = useSelector(state => [...state.table.sortOrder]);
  const orderIndex = sortOrderArr.findIndex(el => el === id);
  const orderLabel =
    sortOrderArr.length > 1 && orderIndex !== -1 ? orderIndex + 1 : null;
  const dispatch = useDispatch();
  return (
    <div
      style={{ width: rowHeight + 10, height: rowHeight }}
      className="sort-column-button"
      onClick={event => {
        if (window.getSelection) {
          window.getSelection().removeAllRanges();
        }
        // remove selection shift+click

        dispatch(onToggleSortedColumn(id));
      }}
    >
      {" "}
      <span className="sort-column-order">{orderLabel}</span>
      <span className={sorted === "asc" ? "sort-column-arrow" : ""}>
        <i className="fa fa-long-arrow-down" aria-hidden="true" />
      </span>
      <span className={sorted === "desc" ? "sort-column-arrow" : ""}>
        <i className="fa fa-long-arrow-up" aria-hidden="true" />
      </span>
    </div>
  );
};
