import React, { useState } from "react";
import { onSetFilter } from "../../store/action/table";
import { useDispatch } from "react-redux";

export default ({ id, setModalVisible, width, filterValue }) => {
  let [value, setValue] = useState(filterValue.length ? filterValue : [""]);
  const dispatch = useDispatch();

  return (
    <div className="filter-column-modal" style={{ width }}>
      <form
        onSubmit={event => {
          event.preventDefault();
          dispatch(onSetFilter(id, value[0] ? value : []));
          setModalVisible(false);
        }}
      >
        <div className="filter-column-modal-input ">
          <div className="string-input-box">
            <input
              type="text"
              value={value[0]}
              placeholder="Введите текст..."
              onChange={e => setValue([e.target.value])}
              className="filter-column-modal-input"
            />
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
