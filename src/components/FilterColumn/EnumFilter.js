import React, { useState } from "react";
import { onSetFilter } from "../../store/action/table";
import {useDispatch, useSelector} from "react-redux";

export default ({ id, setModalVisible, width, filterValue }) => {
  let [value, setValue] = useState(filterValue);
  const dispatch = useDispatch();
  const listAll = useSelector(state=>state.table.initialData.map(el=>el.data[4]));
  const list = [...new Set(listAll)];
  const listHtml = list.map(el=> {
    const checked = !value.includes(el);
   return <div key={el}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            if (value.includes(el)) {
              setValue(value.filter(item => item!==el));
            } else {
              setValue([...value, el]);
            }
          }}
        />
        {el}
      </label>
    </div>
  });
  return (
    <div className="filter-column-modal" style={{ width }}>
      <form
        onSubmit={event => {
          event.preventDefault();
          dispatch(onSetFilter(id, value));
          setModalVisible(false);
        }}
      >
        <div className="filter-column-modal-input-left">
          {listHtml}
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
