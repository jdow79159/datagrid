import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const currentData = useSelector(state => state.table.currentData);
  const currentHeaders = useSelector(state => state.table.currentHeaders.map(el=>el.title));
  const textHeaders = currentHeaders.join(',');
  const textData = currentData.map(el => el.data.join(",")).join(`
`);
  const data = `${textHeaders}
${textData}`;
  return (
    <button
      type="button"
      onClick={() => {
        let link = document.createElement("a");
        link.download = "new sheet.csv";
        let blob = new Blob(
          [data],
          { type: "application/csv" }
        );
        link.href = URL.createObjectURL(blob);
        link.click();
      }}
      className="mr-2"
    >
      Экспорт в CSV
    </button>
  );
};
