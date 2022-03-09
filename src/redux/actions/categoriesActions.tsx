
import axios from "axios";
import {Actions} from "../../redux/constants"
import { dispatchInProgress, dispatchError } from "./commonActions";
import { DispatchType } from "../../types.d/common.types.d";

const loadCategoriesSucess = (data:any) => {
    return{
        type: Actions.LOAD_CATEGORIES_SUCESS,
        data,
      };
}

export const dispatchLoadCategories = () => {
    return async (dispatch:DispatchType) => {        
        dispatch(dispatchInProgress({ status:true, message : "Loading Categories..." }));

        try{
            const resp = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/category/${process.env.REACT_APP_PARENT_CATEGORY_ID}`
            );

            dispatch(loadCategoriesSucess(resp.data.children));
            dispatch(dispatchInProgress({status: false, message: ''}));

        } catch(e:any) {
            dispatch(dispatchError({status: true, message: e.message}));
        }
    }
}