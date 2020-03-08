import React from "react";
import {useDispatch} from "react-redux";
import {onDeleteSelectedRows} from "../../../store/action/table";

export default () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={()=>dispatch(onDeleteSelectedRows())} className="mr-2">
      Удалить ряд
    </button>
  );
};
