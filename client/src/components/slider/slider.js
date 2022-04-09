import React, {useState} from "react";

import MainButton from '../layout/button/button';
import CountdownTimer from '../countdown-timer/timer';

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
    <div className={ "container" }>
      <SliderWrap>
      <Arrow direction="left" onClick={ () => handleClick("left") }>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={ slideIndex }>
        { sliderItems.map((item) => (
          <Slide bg={ item.bg } key={ item.id }>
            <ImgContainer>
              <Image src={ item.img } />

              <div className="price-block">
                Starting at <br/><span>${item.price.split('.')[0]}<sup>{item.price.split('.')[1]}</sup></span>
              
                <CountdownTimer time={ 25000000 }/>
              </div>
            </ImgContainer>
            <InfoContainer>
              <Title>{ item.title }</Title>
              <Desc>{ item.desc }</Desc>
              <MainButton 
                text={ 'SHOW NOW' }
                fontSize={ '14px' }
                border={ 'none' }
                backgroundColor={'teal'}
                width={'150px'}
                color={'#fff'}
              />
            </InfoContainer>
          </Slide>
        )) }
      </Wrapper>
      <Arrow direction="right" onClick={ () => handleClick("right") }>
        <ArrowRightIcon />
      </Arrow>
    </SliderWrap>
    </div>
  );
};

export default Slider;
