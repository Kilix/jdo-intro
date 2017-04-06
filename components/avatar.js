import React from 'react';
import { createComponent } from 'react-fela';

const avatar = ({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  width: 200,
  height: 200,
  boxShadow: '2px 2px 1px 2px rgba(31, 31, 31, 1)',
  /*
    Ajouter le style manquant ici:
    - ajouter une bordure de 2px blanche (#FFF)
    - arrondir les contours pour former un rond (value: 50%)

  */
});

export default createComponent(avatar, 'div');
