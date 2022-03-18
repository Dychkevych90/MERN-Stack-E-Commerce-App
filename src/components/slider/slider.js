import React, {useState} from "react";

import MainButton from '../layout/button/button';

import icons from "../../constants/icons";

import {
  Desc,
  Title,
  SliderWrap,
  InfoContainer,
  Image,
  ImgContainer,
  Slide,
  Wrapper,
  Arrow
} from './styled';

import { sliderItems } from "../../data";

const { ArrowLeftIcon, ArrowRightIcon } = icons;

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <SliderWrap>
      <Arrow direction="left" onClick={ () => handleClick("left") }>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={ slideIndex }>
        { sliderItems.map((item) => (
          <Slide bg={ item.bg } key={ item.id }>
            <ImgContainer>
              <Image src={ item.img } />
            </ImgContainer>
            <InfoContainer>
              <Title>{ item.title }</Title>
              <Desc>{ item.desc }</Desc>
              <MainButton 
                text={ 'SHOW NOW' }
                fontSize={ '20px' }
                border={ '1px solid #000' }
              />
            </InfoContainer>
          </Slide>
        )) }
      </Wrapper>
      <Arrow direction="right" onClick={ () => handleClick("right") }>
        <ArrowRightIcon />
      </Arrow>
    </SliderWrap>
  );
};

export default Slider;
