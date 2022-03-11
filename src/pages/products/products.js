import React from "react";

import Products from "../../components/products/products";
import SelectList from "../../components/layout/select/select";

import CONSTANTS from "../../constants/constants";

import {
  Filter,
  FilterContainer,
  FilterText,
  Title
} from './styled';

const { SIZE, COLORS } = CONSTANTS;

const ProductsPage = () => {
  return (
    <div className="container">
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <SelectList 
            title={ 'Color' }
            data={ COLORS }
          />

          <SelectList 
            title={ 'Size' }
            data={ SIZE }
          />

        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>

          <SelectList 
            data={ ['Newest', 'Price (asc)', 'Price (desc)'] }
          />

        </Filter>
      </FilterContainer>
      <Products />
    </div>
  );
};

export default ProductsPage;