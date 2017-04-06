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
  /*
  Ajouter le style manquant pour le titre:
  - reset les marge interne à 0 (padding)
  - ajouter une marge en bas du composant de 100px
  - changer la police en 'Minecrafter'
  - changer la taille de la police (90px)
  - changer la couleur du texte (#FFE047)
  - appliquer les transformations (inclinaisons de -12deg et -20deg)
  */
});

export default createComponent(title, 'h1');
