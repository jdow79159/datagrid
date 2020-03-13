import React from "react";
import date from 'date-and-time';
export default ({data})=>{
  return <div style={{textAlign: 'center'}}>
    <span>{date.format(new Date(Date.parse(data)),'DD.MM.YYYY HH:mm:ss' )}</span>
    {/*{ Date.parse(data).toLocaleString('ru-RU', {})};*/}
    {/*<input type="date" value={date.format(new Date(Date.parse(data)),'YYYY-MM-DD' )}/>*/}
    {/*<input type="time" value={date.format(new Date(Date.parse(data)),'HH:mm' )}/>*/}
  </div>
}
