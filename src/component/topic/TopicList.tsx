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
  const { topicList } = useSelector((state:TStore) => state.topicsReducer);
  const { loading, error } = useSelector((state:TStore) => state.commonReducers);
  const dispatch = useDispatch();

  const { categoryId } = useParams() as TtopicParam;

  React.useEffect(() => {
    dispatch(dispatchLoadTopics(categoryId))
  }, [categoryId, dispatch]);

  if (loading.status) return <Loader loading={loading} />;
  if (error.status) return <Error error={error} />;
  if (topicList.length <= 0) return <NoData />;

  return (
    <div className="row">
      <ol className="list-group ">
        {topicList.map((topic: topic) => (
          <TopicCard key={topic.tid} topic={topic} />
        ))}
      </ol>
    </div>
  );
};
