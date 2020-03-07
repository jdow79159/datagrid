import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {onToggleVisibleColumn} from "../../../store/action/table";

export default () => {
    const initialHeaders = useSelector(state=>state.table.initialHeaders);
    const currentHeaders = useSelector(state=>state.table.currentHeaders);
  const SelectItem =({title, checked, idx})=> {
      const dispatch = useDispatch();
      return (<div>
          <label>
              <input type="checkbox" onChange={()=>{
                  dispatch(onToggleVisibleColumn(idx))
              }} checked={checked}/>
              {title}
          </label>
      </div>)
  };
  return <>
    <span>Видимость колонок:</span>
    {initialHeaders.map((header, idx)=><SelectItem title={header.title}  idx={header.idx} key={idx}/>)}
    </>
};
