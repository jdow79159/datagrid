import {data, headers} from "./../../data"
import {TOGGLE_VISIBLE_COLUMN, TOGGLE_VISUALIZATION} from "../types";
import {widthColumn} from "../../config";

const initialState = () =>{
  const base = {
    initialHeaders: [...headers].map((el, idx)=>({...el, visible: true,  width: widthColumn[idx] })),
    initialData: [...data],
    currentHeaders: [...headers].map((el, idx)=>({...el, visible: true,   width: widthColumn[idx] })),
    currentData: [...data],
    visualization: true,
  };
  return base;
};

export default (state = initialState(), action)=>{
  switch (action.type) {
    case TOGGLE_VISUALIZATION: return {
      ...state,
      visualization: !state.visualization
    };
    case TOGGLE_VISIBLE_COLUMN: return {
      ...state,
      currentHeaders: [...state.currentHeaders.map((el, idx)=>{
        if (idx===action.payload){
          el.visible=!el.visible
        };
        return el;
      })],
      currentData: [...state.currentData]
    }
    default: return state
  }
}
