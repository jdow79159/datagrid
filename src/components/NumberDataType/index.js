import React from "react";
export default ({data})=>{
  return <div style={{textAlign: 'right'}}>
    {(+data).toLocaleString()}
  </div>
}
