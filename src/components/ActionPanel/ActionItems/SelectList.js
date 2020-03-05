import React from "react";
import {data} from "./../../../data"
export default ({ list }) => {
  list = [...new Set(data.map(el=>el[4]))];
  const SelectItem =({title})=> (
    <div>
      <label>
        <input type="checkbox" />
        {title}
      </label>
    </div>
  );
  return <div className="d-flex flex-wrap">
    {list.map((item, idx)=><SelectItem title={item} key={idx}/>)}
  </div>
};
