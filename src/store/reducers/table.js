import {data, headers} from "./../../data"
import {TOGGLE_VISUALIZATION} from "../types";
const initialState = {
  initialHeaders: {...headers},
  initialData: {...data},
  currentHeaders: {...headers},
  currentData: {...data},
  visualization: true,
};

export default (state= initialState, action)=>{
  switch (action.type) {
    case TOGGLE_VISUALIZATION: return {
      ...state,
      visualization: !state.visualization
    };
    default: return state
  }
}
