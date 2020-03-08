import React from "react";
export default ({data})=>{
  return <div style={{textAlign: 'right'}}>
    <span>{(+data).toLocaleString()}</span>
  </div>
}
