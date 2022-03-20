import React from "react";

import { categories } from "../../data";
import CategoriesItem from "../categoriesItem/categoriesItem";

import * as Style from "./styled";

const Categories = () => {
  return (
    <Style.CategoryWrap>
      { categories.map((item) => {
        return <CategoriesItem key={ item.id } data={ item } />;
      }) }
    </Style.CategoryWrap>
  );
};

export default Categories;
