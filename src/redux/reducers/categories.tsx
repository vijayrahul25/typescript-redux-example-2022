import { Actions } from "../constants";
import { TcategoriesState, TActionType } from "../../types.d/common.types.d";

const initialCategoriesState: TcategoriesState = {
    categoryList: []    
};

export const categoriesReducers = (state: TcategoriesState = initialCategoriesState, action: TActionType) => {
  switch (action.type) {
    
    case Actions.LOAD_CATEGORIES_SUCESS: {
      console.log('action data: ', action.data)
      return {
        ...state,
        categoryList: action.data,
      };
    }
    
    default:
      return state;
  }
};
