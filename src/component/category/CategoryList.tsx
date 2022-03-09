import React from "react";

import { useDispatch, useSelector } from 'react-redux';

import { CategoryCard } from "./CategoryCard";
import { Loader } from "../common/Loader";
import { Error } from "../common/Error";
import { NoData } from "../common/NoData";

import {category,TStore} from "./../../types.d/common.types.d";
import { dispatchLoadCategories } from "../../redux/actions/categoriesActions";


export const CategoryList: React.FC = () => {
  const state = useSelector((state:TStore) => state);
  const dispatch = useDispatch();

  const { categoriesReducers, commonReducers } = state;

  React.useEffect(() => {
    dispatch(dispatchLoadCategories())
  }, [dispatch]);

  if (commonReducers.loading.status) return <Loader loading={commonReducers.loading} />;
  if (commonReducers.error.status) return <Error error={commonReducers.error} />;
  if (categoriesReducers.categoryList.length <= 0) return <NoData />;
  
  return (
    <div className="row">
      {categoriesReducers.categoryList.map((category: category) => (
        <CategoryCard key={category.cid} category={category} />
      ))}
    </div>
  );
};
