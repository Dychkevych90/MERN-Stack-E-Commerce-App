import React from "react";

import {NewsLetterWrap, InputContainer, Input, Button} from './styled';
import SendIcon from '@mui/icons-material/Send';

const NewsLetter = () => {
  return (
    <div className="container">
      <NewsLetterWrap>
        <div className='title'>News Letter</div>
        <div className="desc">Get timely updates from your favorite products.</div>;

        <InputContainer>
          <Input placeholder="Your email" />
          <Button>
            <SendIcon />
          </Button>
      </InputContainer>
      </NewsLetterWrap>
    </div>
  )
};

export default NewsLetter;
