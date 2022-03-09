import { Actions } from "../constants";
import { TtopicsState, TActionType } from "../../types.d/common.types.d";

const initialTopicsState: TtopicsState = {   
    topicList: []  
};

export const topicsReducer = (state: TtopicsState = initialTopicsState, action: TActionType) => {
  switch (action.type) {
    
    
    case Actions.LOAD_TOPICS_SUCESS: {
      return {
        ...state,       
        topicList: action.data,
      };
    }
    default:
      return state;
  }
};
