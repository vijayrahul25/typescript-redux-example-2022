import { Actions } from "../constants";
import { TcommonState, TActionType } from "../../types.d/common.types.d";

const initialCommonState: TcommonState = {
    loading: {status: false, message: ''},
    error: {status: false, message: ''},
};

export const commonReducers = (state: TcommonState = initialCommonState, action: TActionType) => {
  switch (action.type) {
    case Actions.IN_PROGRESS: {
      return {
        ...state,
        loading: {status: action.data.status, message: action.data.message}        
      };
    }    
    case Actions.ERROR: {
      return {
        ...state,
        loading: {status: false},        
        error: {status: action.data.status, message: action.data.message}  
      };
    }
    default:
      return state;
  }
};
