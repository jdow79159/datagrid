import React from "react";
import {headers} from "../../data";
import HeaderItem from "../HeaderItem"
export default ()=>(
  <thead>
  <tr>
    <td/>
    {headers.map(header => (
      <HeaderItem header={header}/>
    ))}
  </tr>
  </thead>
)
