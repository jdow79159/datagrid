import React, { useState } from "react";
import "./FilterColumn.css";
import { rowHeight } from "../../config";
import { useSelector } from "react-redux";
import DateFilter from "./DateFilter";
import NumberFilter from "./NumberFilter";
import StringFilter from "./StringFilter";
import BooleanFilter from "./BooleanFilter";
import EnumFilter from "./EnumFilter";
export default ({ id, width = 150, type }) => {
  const filterValue = useSelector(
    state => state.table.currentHeaders.find(el => el.id === id).filterValue
  );
  const [modalVisible, setModalVisible] = useState(false);

  const filterIcon = "filter-column-icon";
  let filter = null;
  if (type === "number") {
    filter = (
      <NumberFilter
        width={width}
        id={id}
        filterValue={filterValue}
        setModalVisible={setModalVisible}
      />
    );
  }
  if (type === "date") {
    filter = (
      <DateFilter
        width={width}
        id={id}
        filterValue={filterValue}
        setModalVisible={setModalVisible}
      />
    );
  }
  if (type === "string" || type === "enum") {
    filter = (
      <StringFilter
        width={width}
        id={id}
        filterValue={filterValue}
        setModalVisible={setModalVisible}
      />
    );
  }
  if (type === "boolean") {
    filter = (
      <BooleanFilter
        width={width}
        id={id}
        filterValue={filterValue}
        setModalVisible={setModalVisible}
      />
    );
  }
  if (type === "enum") {
    filter = (
      <EnumFilter
        width={width}
        id={id}
        filterValue={filterValue}
        setModalVisible={setModalVisible}
      />
    );
  }
  return (
    <div className="filter-column-button">
      <div
        className={
          filterValue.length
            ? `filter-column-filtered ${filterIcon}`
            : filterIcon
        }
        onClick={() => {
          setModalVisible(!modalVisible);
        }}
        style={{ width: rowHeight, height: rowHeight }}
      >
        <i className="fa fa-filter" aria-hidden="true" />
      </div>
      {modalVisible ? filter : null}
    </div>
  );
};
