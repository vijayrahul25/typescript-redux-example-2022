import React from "react";

import { useDispatch, useSelector } from 'react-redux';

import { CategoryCard } from "./CategoryCard";
import { Loader } from "../common/Loader";
import { Error } from "../common/Error";
import { NoData } from "../common/NoData";

import {category,TStore} from "./../../types.d/common.types.d";
import { dispatchLoadCategories } from "../../redux/actions/categoriesActions";


export const CategoryList: React.FC = () => {
  const {  categoryList } = useSelector((state:TStore) => state.categoriesReducers);
  const { loading, error } = useSelector((state:TStore) => state.commonReducers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(dispatchLoadCategories())
  }, [dispatch]);

  if (loading.status) return <Loader loading={loading} />;
  if (error.status) return <Error error={error} />;
  if (categoryList.length <= 0) return <NoData />;
  
  return (
    <div className="row">
      {categoryList.map((category: category) => (
        <CategoryCard key={category.cid} category={category} />
      ))}
    </div>
  );
};
