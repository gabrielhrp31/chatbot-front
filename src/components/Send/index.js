import React from 'react';
import { MdSend } from 'react-icons/md';

import { StyledButton } from './styles';

function Send({children, ...props}) {
  return <StyledButton {...props} >{children}<MdSend /></StyledButton>;
}

export default Send;