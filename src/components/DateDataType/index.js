import React from "react";
import date from 'date-and-time';
export default ({data})=>{
  return <div style={{textAlign: 'center'}}>
    <span>{date.format(new Date(Date.parse(data)),'DD.MM.YYYY' )}</span>
  </div>
}
