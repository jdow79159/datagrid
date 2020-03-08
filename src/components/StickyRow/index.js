import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sumArray } from "../../utils/functions";
import {multiSelectColumnOff, multiSelectColumnOn, onSelectColumn} from "../../store/action/table";
import {multiSelectsKeys} from "../../config";

export default ({ style = {} }) => {
  const headers = useSelector(state =>
    state.table.currentHeaders.filter(el => el.visible)
  );
  const headersWidthArr = headers.map(el => el.width);
  const dispatch = useDispatch();

  const multiSelectColumn = useSelector(
    state => state.table.isMultiSelectColumn
  );
  return (
    <div className="sticky-in-sticky-list" style={style}         onKeyDown={event => {
      if (!multiSelectColumn && multiSelectsKeys.includes(event.key)) {
        dispatch(multiSelectColumnOn());
        console.log("multiON");
      }
    }}
         onKeyUp={event => {
           if (multiSelectsKeys.includes(event.key)) {
             dispatch(multiSelectColumnOff());
             console.log("multiOFF");
           }
         }}>
      <div className="sticky-box" style={{ width: sumArray(headersWidthArr) }}>
        {headers.length && headers[0].visible ? (
          <div className="sticky sticky-row-z-index">
            <div className="input-box" style={{ width: 20, height: 22 }} />
            <div
              style={{
                width: headersWidthArr[0],
                left: 20,
                top: 0,
                textAlign: "center"
              }}
              className={"row-in-sticky-list-item"}
            >
              <a
                href={`#${headers[0].title}`}
                onClick={event => {
                  event.preventDefault();
                  dispatch(onSelectColumn(headers[0].id));
                }}
              >
                {headers[0].title}
              </a>
            </div>
          </div>
        ) : null}
        {headers.map((el, idx) =>
          idx && headers[idx].visible ? (
            <div
              style={{
                width: headersWidthArr[idx],
                left: sumArray(headersWidthArr, idx) + 20,
                textAlign: "center"
              }}
              className={"row-in-sticky-list-item"}
              key={idx}
            >
              <a
                href={`#${headers[idx].title}`}
                onClick={event => {
                  event.preventDefault();
                  dispatch(onSelectColumn(headers[idx].id));
                }}
              >
                {headers[idx].title}
              </a>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
