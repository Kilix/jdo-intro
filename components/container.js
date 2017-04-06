import React from 'react';
import { createComponent } from 'react-fela';

const container = ({ column = false }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: column ? 'column' : 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export default createComponent(container, 'div');
