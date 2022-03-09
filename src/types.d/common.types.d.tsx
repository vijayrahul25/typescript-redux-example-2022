import { Actions } from "../redux/constants";

type langauge = {
    name: string;
    description: string;
};

type translations = {
    en: langauge;
};

export type category = {
    backgroundImage: string;
    translations: translations;
    cid: number;
    totalPostCount: number;
    totalTopicCount: number;
};
  
type teaser = {
    content: string;
};

export type topic = {
    tid: number;
    title: string;
    teaser: teaser;
    postcount: number;
};
  
export type post = {
    pid: number;
    content: string;
};
  
export type  loading = {status: boolean, message: string}

export type error = {status: boolean, message: string}

export type TActionType = {
    type: Actions;
    data: any;
};

export type TtopicsState = {    
    topicList: Array<topic>;    
};
export type TcategoriesState = {
    categoryList: Array<category>;    
};
export type TpostsState = {
    postList: Array<post>;
};
export type TcommonState = {   
    loading: loading;
    error: error;
};

export type TStore = {
    categoriesReducers: TcategoriesState;
    topicsReducer: TtopicsState;
    postsReducers: TpostsState;
    commonReducers: TcommonState;
};

export type DispatchType = (args: TActionType) => TActionType