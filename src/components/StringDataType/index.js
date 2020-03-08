import React from "react";
export default ({data})=>{
  return <div style={{textOverflow: 'ellipsis'}}>
    <span>{data}</span>
  </div>
}
