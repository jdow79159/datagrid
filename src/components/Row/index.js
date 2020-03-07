import React from "react";
import { getLeftInRow, widthRow } from "../../utils/functions";
import { useSelector } from "react-redux";
import SwitchDataType from "./../SwitchDataType";
export default ({ index, style = {} }) => {
  const data = useSelector(state=>state.table.currentData);
  const headers = useSelector(state=>state.table.currentHeaders);
  return (
    <div className="row-in-sticky-list" style={style}>
      <div
        className="sticky-box"
        style={{ width: getLeftInRow(widthRow.length) }}
      >
        <div className="sticky row-z-index">
          <div className="input-box" style={{ width: 20, height: 22 }}>
            <input type="checkbox" />
          </div>
          <div
            style={{ width: widthRow[0], left: 20 }}
            className={"row-in-sticky-list-item"}
          >
            <SwitchDataType data={data[index][0]} type={headers[0].type} />
          </div>
        </div>
        {data[index].map((el, idx) =>
          idx ? (
            <div
              style={{ width: widthRow[idx], left: getLeftInRow(idx) + 20 }}
              className={"row-in-sticky-list-item"}
              key={idx}
            >
              <SwitchDataType data={el} type={headers[idx].type} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
