import React from "react";
export default ({data})=>{
  return <div style={{textAlign: 'center'}}>
    <span>{data ? '✓' : '' }</span>
  </div>
}
