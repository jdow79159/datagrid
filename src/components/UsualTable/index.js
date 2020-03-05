import React from "react";
import "./UsualTable.css";

import StickyRow from "./../StickyRow"
import Row from "./../Row"

export default ({height})=>{
  const config = {
    rowHeight: 22,
    rowCount: 1000,
  };
  const makeRows = ()=>{
    const arr = [];
    for (let i=0; i < config.rowCount; i++){
      arr.push(<Row style={{position: 'absolute', left: 0, top: 22*(i+1), height: config.rowHeight, width: '100%'}} key={`Row${i}`} index={i}/>);
    }
    return arr;
  };
return <div style={{height: height}} className="usual-table">
  <div style={{height: config.rowCount* config.rowHeight}}>
      <StickyRow style={{ top: 0, left: 0, height: 22, position: 'sticky' }}/>
    {makeRows()}
  </div>
</div>
}
