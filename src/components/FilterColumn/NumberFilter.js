import React, { useState } from "react";
import { onSetFilter } from "../../store/action/table";
import {useDispatch} from "react-redux";

export default ({ id,  setModalVisible, filterValue, width }) => {
  let [value, setValue] = useState( filterValue.length ? filterValue : ["",""]);
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
          <div className="number-box">
            <div>
              от:{" "}
              <input
                type="number"
                value={value[0]}
                onChange={e => {
                  setValue([e.target.value, value[1]]);
                }}
                required
                className="number-input"
              />
            </div>
            <div className="number-box">
              до:{" "}
              <input
                type="number"
                value={value[1]}
                onChange={e => {
                  setValue([value[0], e.target.value]);
                }}
                required
                className="number-input"
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
        </div>
        <div className="filter-column-modal-button-box">
          <button type="submit">Поиск</button>
          <button
            onClick={() => {
              setModalVisible(false);
            }}
          >
            Закрыть
          </button>
        </div>
      </form>
    </div>
  );
};
