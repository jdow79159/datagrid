import React from "react";
import {getLeftInRow, widthRow} from "../../utils/functions";
import {headers} from "../../data";

export default ({ style = {} }) => (
  <div className="sticky-in-sticky-list" style={style}>
    <div className="sticky-box" style={{width: getLeftInRow(widthRow.length)}}>
      <div className="sticky sticky-row-z-index">
        <div className="input-box" style={{width: 20, height: 22}}/>
        <div
          style={{width: widthRow[0], left: 20, top: 0}}
          className={"row-in-sticky-list-item"}
        >
          <a href={`#${headers[0].title}`} onClick={event => event.preventDefault()}>{headers[0].title}</a>
        </div>
      </div>
      {headers.map((el,idx)=>(
          idx?
            <div
              style={{width: widthRow[idx], left: getLeftInRow(idx) + 20}}
              className={"row-in-sticky-list-item"}
              key={idx}
            >
              <a href={`#${headers[idx].title}`} onClick={event => event.preventDefault()}>{headers[idx].title}</a>
            </div>:null
        )
      )}
    </div>
  </div>
);
