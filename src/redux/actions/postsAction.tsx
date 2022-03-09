
import axios from "axios";
import {Actions} from "../../redux/constants"
import { dispatchInProgress, dispatchError } from "./commonActions";
import { DispatchType } from "../../types.d/common.types.d";

const loadPostsSucess = (data:any) => {
    return{
        type: Actions.LOAD_POSTS_SUCESS,
        data,
      };
}

export const dispatchLoadPosts = (topicId:string) => {
    return async (dispatch:DispatchType) => {        
        dispatch(dispatchInProgress({ status:true, message : "Loading Categories..." }));

        try{
            const resp = await  axios
            .get(
              `${process.env.REACT_APP_API_URL}/api/topic/${topicId}`
            )

            dispatch(loadPostsSucess(resp.data.posts));
            dispatch(dispatchInProgress({status: false, message: ''}));

        } catch(e:any) {
            dispatch(dispatchError({status: true, message: e.message}));
        }
    }
}