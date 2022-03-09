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
  const { postList } = useSelector((state:TStore) => state.postsReducers);
  const { loading, error } = useSelector((state:TStore) => state.commonReducers);
  const dispatch = useDispatch();

  let { topicId } = useParams() as TPostParam;
  
  React.useEffect(() => {
    dispatch(dispatchLoadPosts(topicId));
  }, [topicId, dispatch]);

  if (loading.status) return <Loader loading={loading} />;
  if (error.status) return <Error error={error} />;
  if (postList.length <= 0) return <NoData />;

  return (
    <div className="row">
      {postList.map((post: post) => (
        <PostCard key={post.pid} post={post} />
      ))}
    </div>
  );
};
