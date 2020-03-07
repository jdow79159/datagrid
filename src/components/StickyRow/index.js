import React from "react";
import {useSelector} from "react-redux";
import {sumArray} from "../../utils/functions";

export default ({ style = {} }) => {
    const headers = useSelector(state=>state.table.currentHeaders);
    const headersWidthArr =  headers.map(el=>el.width);
    return <div className="sticky-in-sticky-list" style={style}>
        <div className="sticky-box" style={{width: sumArray(headersWidthArr)}}>
            {headers[0].visible ?
            <div className="sticky sticky-row-z-index">
                <div className="input-box" style={{width: 20, height: 22}}/>
                <div
                    style={{width: headersWidthArr[0], left: 20, top: 0}}
                    className={"row-in-sticky-list-item"}
                >
                    <a href={`#${headers[0].title}`} onClick={event => event.preventDefault()}>{headers[0].title}</a>
                </div>
            </div> : null}
            {headers.map((el, idx) => (
                    idx && headers[idx].visible?
                        <div
                            style={{width: headersWidthArr[idx], left: sumArray(headersWidthArr, idx) + 20}}
                            className={"row-in-sticky-list-item"}
                            key={idx}
                        >
                            <a href={`#${headers[idx].title}`}
                               onClick={event => event.preventDefault()}>{headers[idx].title}</a>
                        </div> : null
                )
            )}
        </div>
    </div>
};
