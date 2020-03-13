import React, { createRef, useEffect, useState } from "react";
import ActionPanel from "../ActionPanel";
import VisualizedTable from "../VisualizedTable";
import UsualTable from "../UsualTable";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import { multiSelectsKeys } from "../../config";
import { multiSortOff, multiSortOn } from "../../store/action/table";
export default () => {
  const [height, setHeight] = useState(0);
  const isVisualization = useSelector(state => state.table.isVisualization);
  const refBlock = createRef();
  useEffect(() => {
    setHeight(refBlock.current.clientHeight - 20);
  }, [refBlock]);
  const dispatch = useDispatch();


  useEffect(() => {
    let isMultiSort = false;
    const onKeyDown = event => {
      if (!isMultiSort && multiSelectsKeys.includes(event.key)) {
        dispatch(multiSortOn());
        console.log("multiON");
        isMultiSort = true;
      }
    };
    const onKeyUp = event => {
      if (multiSelectsKeys.includes(event.key)) {
        dispatch(multiSortOff());
        console.log("multiOFF");
        isMultiSort = false;
      }
    };
    // initiate the event handler
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    // this will clean up the event every time the component is re-rendered
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [dispatch]);
  return (
    <div className="container d-flex flex-column" style={{ height: "100vh" }}>
      <ActionPanel />
      <div className="flex-grow-1" ref={refBlock}>
        {isVisualization ? (
          <VisualizedTable height={height} />
        ) : (
          <UsualTable height={height} />
        )}
      </div>
    </div>
  );
};
