
import axios from "axios";
import {Actions} from "../../redux/constants"
import { dispatchInProgress, dispatchError } from "./commonActions";
import { DispatchType } from "../../types.d/common.types.d";

const loadTopicsSucess = (data:any) => {
    return{
        type: Actions.LOAD_TOPICS_SUCESS,
        data,
      };
}

export const dispatchLoadTopics2 = (categoryId:string) => {
    return (dispatch:DispatchType) => {
    dispatch(dispatchInProgress({ status:true, message : "Loading Topics..." }));
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/category/${categoryId}/topic`)
        .then((resp) => {
          if (resp.status !== 200) {
            throw Error(resp.data.statusText);
          }
          dispatch(dispatchInProgress({status: false, message: ''}));
          return resp;
        })
        .then((resp) => {
          dispatch(loadTopicsSucess(resp.data.topics));
        })
        .catch((e) =>
          dispatch(
            dispatch(dispatchError({status: true, message: e.message})))
        );
    }
}

export const dispatchLoadTopics = (categoryId:string) => {
    return async (dispatch:DispatchType) => {        
        dispatch(dispatchInProgress({ status:true, message : "Loading Topics..." }));

        try{
            const resp = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/${categoryId}/topic`);

            dispatch(loadTopicsSucess(resp.data.topics));
            dispatch(dispatchInProgress({status: false, message: ''}));

        } catch(e:any) {
            dispatch(dispatchError({status: true, message: e.message}));
        }
    }
}