import React from "react";

import { banners } from "../../data";
import CategoriesItem from "../categoriesItem/categoriesItem";

import * as Style from "./styled";

const BannerSection = () => {
  return (
    <Style.CategoryWrap>
      { banners.map((item) => {
        return <CategoriesItem key={ item.id } data={ item } banners />;
      }) }
    </Style.CategoryWrap>
  );
};

export default BannerSection;
