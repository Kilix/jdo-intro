import React from 'react';
import { createComponent } from 'react-fela';

// Calcul de la taille des scores
const getW = (afr, jdo) => afr + jdo !== 0 ? 100 * afr / (afr + jdo) : 50;

// Container global de la page
const container = props => ({
  display: 'flex',
  alignItems: 'stretch',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: -1,
});

// Définition des partitions representant les scores
// Number -> String -> Object
const part = ({ size, backgroundColor }) => ({
  backgroundColor,
  transition: 'all .3s ease',
});

const Container = createComponent(container, 'div');
const Part = createComponent(part, 'div');

export default ({ afr, jdo }) => {
  const afrW = getW(afr, jdo);
  const jdoW = 100 - afrW;
  return (
    <Container>
      <Part style={{ flex: `1 0 ${Math.floor(afrW)}%` }} backgroundColor="#24BEC8" />
      <Part style={{ flex: `1 0 ${Math.floor(jdoW)}%` }} backgroundColor="#EA3338" />
    </Container>
  );
};
