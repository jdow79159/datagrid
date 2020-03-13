import React, { useState } from "react";
import { onSetFilter } from "../../store/action/table";
import {useDispatch} from "react-redux";

export default ({ id,  setModalVisible, filterValue, width }) => {
  const [value, setValue] = useState(filterValue.length ? filterValue : ["", ""]);
  const dispatch = useDispatch();
  return (
    <div className="filter-column-modal" style={{ width }}>
      <form
        onSubmit={event => {
          event.preventDefault();
          dispatch(onSetFilter(id, value));
          setModalVisible(false);
        }}
      >
        <div className="filter-column-modal-input ">
          <div className="date-box">
            с:
            <input
              type="date"
              value={value[0]}
              onChange={e => {
                setValue([e.target.value, value[1]]);
              }}
              min="1980-01-01"
              max="2050-01-01"
              required
            />
          </div>
          <div className="date-box">
            до:{" "}
            <input
              type="date"
              value={value[1]}
              onChange={e => {
                setValue([value[0], e.target.value]);
              }}
              min="1980-01-01"
              max="2050-01-01"
              required
            />
          </div>
          <button
            onClick={() => {
              dispatch(onSetFilter(id, []));
              setModalVisible(false);
            }}
          >
            Сбросить фильтр
          </button>
        </div>
        <div className="filter-column-modal-button-box">
          <button type="submit">Поиск</button>
          <button
            onClick={() => {
              setModalVisible(false);
              setValue(filterValue);
            }}
          >
            Закрыть
          </button>
        </div>
      </form>
    </div>
  );
};
