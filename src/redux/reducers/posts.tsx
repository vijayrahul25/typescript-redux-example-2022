import { Actions } from "../constants";
import { TpostsState, TActionType } from "../../types.d/common.types.d";

const initialPostsState: TpostsState = {   
    postList: []
};

export const postsReducers = (state: TpostsState = initialPostsState, action: TActionType) => {
  switch (action.type) {    
    case Actions.LOAD_POSTS_SUCESS: {
      return {
        ...state,        
        postList: action.data,
      };
    }
   
    default:
      return state;
  }
};
