
import {Actions} from "../../redux/constants"

export const dispatchInProgress = (data:any) => {
    return { 
        type: Actions.IN_PROGRESS, 
        data
    }
}

export const dispatchError = (data:any) => {
    return { 
        type: Actions.ERROR,
        data
   }
}