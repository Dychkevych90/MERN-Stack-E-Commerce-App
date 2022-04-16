import React from "react";

import icons from "../../constants/icons";

const { TelegramIcon } = icons;

import {
  ContactItem,
  Bottom,
  Left,
  Title,
  Desc,
  SocialContainer,
  SocialIcon,
  Logo
} from './styled';

const Footer = () => {
  return (
    <div className="container">
      <Left>
        <Logo>DEVELOPER.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999" href="#" target={ '_blank' }>
            <TelegramIcon />
          </SocialIcon>
          <SocialIcon color="E4405F" href="#" target={ '_blank' }>
            <TelegramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE" href="#" target={ '_blank' }>
            <TelegramIcon />
          </SocialIcon>
          <SocialIcon color="E60023" href="#" target={ '_blank' }>
            <TelegramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Bottom>
      <div className='footer-item' >
          <Title>Links</Title>
          <ul>
            <ContactItem>Products</ContactItem>
            <ContactItem>About Us</ContactItem>
            <ContactItem>Contacts</ContactItem>
          </ul>
        </div>
        <div className='footer-item' >
          <Title>Contact</Title>
          <ContactItem>
            some place in the world
          </ContactItem>
          <ContactItem>
            +1 234 56 78 882 7272
          </ContactItem>
          <ContactItem>
            contactMail@gmail.com
          </ContactItem>
        </div>
      </Bottom>
    </div>
  );
};

export default Footer;