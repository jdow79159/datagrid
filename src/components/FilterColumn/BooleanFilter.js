import React, { useState } from "react";
import { onSetFilter } from "../../store/action/table";
import {useDispatch} from "react-redux";

export default ({ id, setModalVisible, width, filterValue }) => {
  let [value, setValue] = useState( filterValue);
  const yes = !value.includes(true);
  const no = !value.includes(false);
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
          <div>
            <label>
              Да
              <input
                type="checkbox"
                checked={yes}
                onChange={() => {
                  if (!value.includes(true)) {
                    setValue([...value, true]);
                  } else {
                    setValue(value.filter(el => !el));
                  }
                }}
              />
            </label>
            <label>
              Нет
              <input
                type="checkbox"
                checked={no}
                onChange={() => {
                  if (no) {
                    setValue([...value, false]);
                  } else {
                    setValue(value.filter(el => el));
                  }
                }}
              />
            </label>
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
