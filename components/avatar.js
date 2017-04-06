import React from 'react';
import { createComponent } from 'react-fela';

const avatar = ({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  width: 200,
  height: 200,
  border: '2px solid #FFF',
  borderRadius: '50%',
  boxShadow: '2px 2px 1px 2px rgba(31, 31, 31, 1)',
});

export default createComponent(avatar, 'div');
