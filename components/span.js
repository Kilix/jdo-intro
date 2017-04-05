import React from 'react';
import { createComponent } from 'react-fela';

const span = () => ({
  display: 'flex',
  jsutifyContent: 'center',
  alignItems: 'center',
  color: '#ffe047',
  fontSize: '100px',
  transform: 'scale(1, 1.6)',
  textShadow: '3px 3px 3px #1F1F1F',
  fontFamily: 'Streamster',
  fontWeight: 'bold',
  userSelect: 'none',
  cursor: 'default',
});

export default createComponent(span, 'span');
