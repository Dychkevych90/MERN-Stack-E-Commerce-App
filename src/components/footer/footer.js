import React from "react";

import icons from "../../constants/icons";

const { TelegramIcon } = icons;

import {
  Center,
  ContactItem,
  Right,
  Left,
  List,
  ListItem,
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
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
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
      </Right>
    </div>
  );
};

export default Footer;