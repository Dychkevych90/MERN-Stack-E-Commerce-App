import React from "react";

import {
  Option,
  Select,
} from './styled';

const SelectList = ( { data, title } ) => {
  return (
    <Select>
      { title && <Option disabled selected>{ title }</Option> }
      {
        data.map((item) => { return  <Option key={ item }>{ item }</Option> })
      }
    </Select>
  );
};

export default SelectList;
