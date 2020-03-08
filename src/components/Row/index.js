import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SwitchDataType from "./../SwitchDataType";
import { sumArray } from "../../utils/functions";
import { onSelectRow } from "../../store/action/table";
export default ({ index, style = {} }) => {
  const headers = useSelector(state => state.table.currentHeaders);
  const headersVisible = headers.filter(el => el.visible);
  const headersWidthArr = headers.filter(el => el.visible).map(el => el.width);
  const data = useSelector(state =>
    state.table.currentData.map(el =>
      el.filter((_, idx) => headers[idx].visible)
    )
  );
  const selectedColumns = useSelector(state =>
    state.table.selectedColumns.map(el =>
      headersVisible.findIndex(item => item.id === el)
    )
  );
  const dispatch = useDispatch();
  const isRowSelected = useSelector(state =>
    state.table.selectedRows.includes(index)
  );
  return (
    <div
      className={
        isRowSelected ? "row-in-sticky-list selected" : "row-in-sticky-list"
      }
      style={style}
    >
      <div className="sticky-box" style={{ width: sumArray(headersWidthArr) }}>
        {data.length ? (
          <div className="sticky row-z-index">
            <div className="input-box" style={{ width: 20, height: 22 }}>
              <input
                type="checkbox"
                checked={isRowSelected}
                onChange={() => {
                  dispatch(onSelectRow(index));
                }}
              />
            </div>
            {headersVisible.length ? (
              <div
                style={{ width: headersWidthArr[0], left: 20 }}
                className={
                  selectedColumns.includes(0)
                    ? "row-in-sticky-list-item selected"
                    : "row-in-sticky-list-item"
                }
              >
                <SwitchDataType
                  data={data[index][0]}
                  type={headersVisible[0].type}
                />
              </div>
            ) : null}
          </div>
        ) : null}
        {data[index].map((el, idx) =>
          idx ? (
            <div
              style={{
                width: headersWidthArr[idx],
                left: sumArray(headersWidthArr, idx) + 20
              }}
              className={
                selectedColumns.includes(idx)
                  ? "row-in-sticky-list-item selected"
                  : "row-in-sticky-list-item"
              }
              key={idx}
            >
              <SwitchDataType data={el} type={headersVisible[idx].type} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
