import React from "react";

import { categories } from "../../data";
import CategoriesItem from "../categoriesItem/categoriesItem";

import * as Style from "./styled";

const Categories = () => {
  return (
    // <div className="container">
      <Style.CategoryWrap>
          {categories.map((item, index) => {
            return <CategoriesItem key={index} data={item} />;
          })}
      </Style.CategoryWrap>
    // </div>
  );
};

export default Categories;
