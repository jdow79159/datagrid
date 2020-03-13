import React from "react";
import { useSelector } from "react-redux";
import { sumArray } from "../../utils/functions";
import SortColumn from "./../SortColumn";
import FilterColumn from "./../FilterColumn";
import {  rowHeight } from "../../config";
import "./StickyRow.css";

export default ({ style = {} }) => {
  const headers = useSelector(state =>
    state.table.currentHeaders.filter(el => el.visible)
  );
  const headersWidthArr = headers.map(el => el.width);
  return (
    <div
      className="sticky-in-sticky-list"
      style={style}
    >
      <div className="sticky-box" style={{ width: sumArray(headersWidthArr) }}>
        {headers.length && headers[0].visible ? (
          <div className="sticky sticky-row-z-index">
            <div
              className="input-box"
              style={{ width: 20, height: rowHeight }}
            />
            <div

              style={{
                width: headersWidthArr[0],
                left: 20,
                top: 0,
                height: rowHeight
              }}
              className={"row-in-sticky-list-item d-flex"}
            > <div className="flex-grow-1 th-table" style={{textAlign: 'center'}}>
              <b>
                {headers[0].title}
              </b>
              </div>
              <SortColumn id={headers[0].id}/>
              <FilterColumn id={headers[0].id} width={headersWidthArr[0]} type={headers[0].type}/>
            </div>
          </div>
        ) : null}
        {headers.map((el, idx) =>
          idx && headers[idx].visible ? (
            <div
              style={{
                width: headersWidthArr[idx],
                left: sumArray(headersWidthArr, idx) + 20,
                textAlign: "center",
                height: rowHeight
              }}
              className={"row-in-sticky-list-item d-flex"}
              key={idx}
            ><div className="flex-grow-1 th-table">
                {headers[idx].title}
            </div>

              <SortColumn id={headers[idx].id}/>
              <FilterColumn id={headers[idx].id} width={headersWidthArr[idx]} type={headers[idx].type}/>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
