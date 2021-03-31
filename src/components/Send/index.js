import React from 'react';
import { MdSend } from 'react-icons/md';

import { StyledButton, Loader } from './styles';

function Send({children, loading, ...props}) {
  return <StyledButton {...props} >Enviar {loading?<Loader />:<MdSend />}</StyledButton>;
}

export default Send;