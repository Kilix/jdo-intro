import React from 'react';
import { createComponent } from 'react-fela';

const title = () => ({
  position: 'relative',
  top: 50,
  margin: '0 auto',
  padding: 0,
  marginBottom: 100,
  fontFamily: 'Minecrafter',
  fontSize: '90px',
  transform: 'skew(-12deg, -20deg)',
  color: '#FFE047',
  textShadow: '12px 15px 1px #1F1F1F',
  '>span': {
    marginLeft: 80,
  },
});

export default createComponent(title, 'h1');
