import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from "../common/Loader";
import { Error } from "../common/Error";
import { NoData } from "../common/NoData";
import { PostCard } from "./PostCard";

import { dispatchLoadPosts } from "../../redux/actions/postsAction";


import {post,TStore} from "./../../types.d/common.types.d";

type TPostParam = {
  topicId: string;
};

export const PostList: React.FC = () => {
  const state = useSelector((state:TStore) => state);
  const dispatch = useDispatch();

  const { postsReducers, commonReducers } = state;

  let { topicId } = useParams() as TPostParam;
  
  React.useEffect(() => {
    dispatch(dispatchLoadPosts(topicId));
  }, [topicId, dispatch]);

  if (commonReducers.loading.status) return <Loader loading={commonReducers.loading} />;
  if (commonReducers.error.status) return <Error error={commonReducers.error} />;
  if (postsReducers.postList.length <= 0) return <NoData />;

  return (
    <div className="row">
      {postsReducers.postList.map((post: post) => (
        <PostCard key={post.pid} post={post} />
      ))}
    </div>
  );
};
