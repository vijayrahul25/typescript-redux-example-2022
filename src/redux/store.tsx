import { createStore, applyMiddleware,Store } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {Reducers} from './reducers';
import {DispatchType, TStore} from "../types.d/common.types.d";

export const store: Store<TStore> & {
    dispatch: DispatchType
  } = createStore(Reducers, applyMiddleware(thunkMiddleware))
