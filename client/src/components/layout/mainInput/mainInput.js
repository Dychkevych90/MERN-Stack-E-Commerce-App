import React, {useState, useEffect} from "react";

import {Wrapper} from "./styled";

const MainInput = (
  {
    label,
    name,
    type,
    required,
    errorText,
    validation,
    defaultValue,
    readOnly,
    grey,
  }
) => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (defaultValue) {
      setActive(true);
    }
  })

  const onChange = (e) => {
    setActive(e.target.value);
  }

  return (
    <Wrapper className={` ${validation && 'valid'}`} grey={grey} label={active} >
      <label className={`label ${active && 'active'}`}>{label}</label>
      <input
        name={name}
        required={required}
        type={type}
        onChange={(e) => onChange(e)}
        defaultValue={defaultValue}
        readOnly={readOnly}
        autoComplete={'off'}
      />
      {
        validation
          ?  <div className={'errorText'}>{errorText}</div>
          : null
      }

    </Wrapper>
  )
}

export default MainInput;