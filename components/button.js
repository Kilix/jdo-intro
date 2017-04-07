import React from 'react';
import { createComponent } from 'react-fela';

const button = props => ({
  position: 'relative',
  top: 0,
  left: 0,
  outline: 'none',
  border: 'none',
  boxShadow: '2px 2px 1px 1px rgba(31, 31, 31, 1)',
  lineHeight: 1.1,
  cursor: 'pointer',
  transition: 'all .1s ease-in',
  ':hover': {
    top: 1,
    left: 1,
    boxShadow: '1px 1px 0px 0px rgba(31, 31, 31, 1)',
  },
  margin: '18px',
  padding: '14px',
  marginBottom: '5px',
  color: '#262425',
  backgroundColor: '#FFE047',
  fontSize: '24px',
  fontFamily: 'Minecrafter',
});

export default createComponent(button, 'button', ['onClick']);
