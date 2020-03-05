import React from "react";

export default ({ list }) => {
  const SelectItem =({title})=> (
    <div>
      <label>
        <input type="checkbox" />
        {title}
      </label>
    </div>
  );
  return <>
    <span>Видимость колонок:</span>
    {list.map((item, idx)=><SelectItem title={item} key={idx}/>)}
    </>
};
