import React from 'react';
import { createComponent } from 'react-fela';

const title = () => ({
  position: 'relative',
  top: 50,
  margin: '0 auto',
  textShadow: '12px 15px 1px #1F1F1F',
  '>span': {
    marginLeft: 80,
  },
  padding: '0px',
  marginBottom: '100px',
  fontFamily: 'Minecrafter',
  fontSize: '90px',
  color: '#FFE047',
  transform: 'skew(-12deg,-20deg)',
});

export default createComponent(title, 'h1');
