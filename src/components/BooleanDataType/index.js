import React from "react";
export default ({data})=>{
  return <div style={{textAlign: 'center'}}>
    {data ? '✓' : '' }
  </div>
}
