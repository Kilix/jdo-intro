import React from 'react';
import { createComponent } from 'react-fela';

const button = props => ({
  position: 'relative',
  top: 0,
  left: 0,
  margin: 18,
  padding: 14,
  paddingBottom: 5,
  outline: 'none',
  border: 'none',
  borderRadius: '2px',
  backgroundColor: '#FFE047',
  boxShadow: '2px 2px 2px 2px rgba(31, 31, 31, 1)',
  fontFamily: 'Minecrafter, cursive',
  fontSize: '24px',
  lineHeight: 1.1,
  color: '#262425',
  cursor: 'pointer',
  transition: 'all .1s ease-in',
  ':hover': {
    top: 1,
    left: 1,
    boxShadow: '1px 1px 0px 0px rgba(31, 31, 31, 1)',
  },
});

export default createComponent(button, 'button', ['onClick']);