import React from "react";
import "./UsualTable.css";

import StickyRow from "./../StickyRow"
import Row from "./../Row"
import {rowHeight} from "../../config";
import {useSelector} from "react-redux";

export default ({height})=>{
  const rowCount = useSelector(state=>state.table.currentData.length);

  const makeRows = ()=>{
    const arr = [];
    for (let i=0; i < rowCount; i++){
      arr.push(<Row style={{position: 'absolute', left: 0, top: rowHeight*(i+1), height: rowHeight, width: '100%'}} key={`Row${i}`} index={i}/>);
    }
    return arr;
  };
return <div style={{height: height}} className="usual-table">
  <div style={{height: rowCount* rowHeight}}>
      <StickyRow style={{ top: 0, left: 0, height: rowHeight, position: 'sticky' }}/>
    {makeRows()}
  </div>
</div>
}
