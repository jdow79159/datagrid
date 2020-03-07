import React, {createRef, useEffect, useState} from "react";
import ActionPanel from "../ActionPanel";
import VisualizedTable from "../VisualizedTable";
import UsualTable from "../UsualTable";
import "./main.css";
import {useSelector} from "react-redux";
export default ()=>{
  const [height, setHeight] = useState(0);
  const visualization = useSelector(state=>state.table.visualization);
  const refBlock = createRef();
  useEffect(() => {
    setHeight(refBlock.current.clientHeight - 20);
  }, []);
  return (<div className="container d-flex flex-column" style={{ height: "100vh" }}>
    <ActionPanel />
    <div className="flex-grow-1" ref={refBlock}>
      {visualization? <VisualizedTable height={height} />
        : <UsualTable height={height}/>}
    </div>
  </div>)
}
