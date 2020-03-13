import React from "react";
import StringDataType from "./../StringDataType";
import BooleanDataType from "./../BooleanDataType";
import NumberDataType from "./../NumberDataType";
import DateDataType from "./../DateDataType";

export default ({data, type})=>{
  switch (type) {
    case 'string': return <StringDataType data={data}/>;
    case 'enum': return <StringDataType data={data}/>;
    case 'boolean': return <BooleanDataType data={data}/>;
    case 'number': return <NumberDataType data={data}/>;
    case 'date': return <DateDataType data={data}/>;
    default: return <StringDataType data={data}/>;
  }
}
