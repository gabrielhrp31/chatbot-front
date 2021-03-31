import React from 'react';
import { MdSend } from 'react-icons/md';

import { Container, StyledInput, Button } from './styles';

function Input({onSend=()=>false,onlyText=false, ...props}) {
  return <Container>
      {!onlyText ?
        <>
            <StyledInput {...props} />
            <Button type="button" onClick={()=>onSend()}><MdSend/></Button>
        </>
        :
        <>
            {props.value}
        </>
      }
    </Container>;
}

export default Input;