import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { TopicCard } from "./TopicCard";
import { Loader } from "../common/Loader";
import { Error } from "../common/Error";
import { NoData } from "../common/NoData";

import {topic,TStore} from "./../../types.d/common.types.d";
import {dispatchLoadTopics} from "../../redux/actions/topicsAction";

type TtopicParam = {
  categoryId: string;
};

export const TopicList: React.FC = () => {
  const state = useSelector((state:TStore) => state);
  const dispatch = useDispatch();

  const { topicsReducer, commonReducers } = state;
  const { categoryId } = useParams() as TtopicParam;

  React.useEffect(() => {
    dispatch(dispatchLoadTopics(categoryId))
  }, [categoryId, dispatch]);

  if (commonReducers.loading.status) return <Loader loading={commonReducers.loading} />;
  if (commonReducers.error.status) return <Error error={commonReducers.error} />;
  if (topicsReducer.topicList.length <= 0) return <NoData />;

  return (
    <div className="row">
      <ol className="list-group ">
        {topicsReducer.topicList.map((topic: topic) => (
          <TopicCard key={topic.tid} topic={topic} />
        ))}
      </ol>
    </div>
  );
};
