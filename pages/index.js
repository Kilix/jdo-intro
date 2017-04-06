/*
  WELCOME TO THE JUNGLE CODE
  Je suis dispo toute la matinée pour t'aider et les questions donc n'hésite surtout pas ;)
  HAVE FUN !!
  Les url d'images a utiliser plustard sont : "static/jdo.jpg" et "static/afr.jpg"

  PART ONE :
  Les modifications a faire dans ce fichier sont :
  - Ajouter le composant Background avec les bonnes propriétés
  - Modifier le src pour les 2 Avatars
  - Ajouter le composant Score avec le bon texte


  PART TWO :
  - Compléter la fonction voteAFR() et voteJDO()
  - Ce protéger des tricheurs ( ou tricher )
*/

import React, { Component } from 'react';
import fetch from 'node-fetch';
import Layout from '../layout';
import { createComponent } from 'react-fela';

// Penser a importer pour la partie 2 les fonction de utils (cf: Part Two du guide)
import F from '../firebase';

import Avatar from '../components/avatar';
import Background from '../components/background';
import Button from '../components/button';
import Container from '../components/container';
// Pense à importer le composant Score en haut du fichier : 'import Score from '../composants/score';'
import Span from '../components/span';
import Title from '../components/title';

const afrRef = F.database().ref('afr');
const jdoRef = F.database().ref('jdo');

const neFaisRien = () => {};

class Home extends Component {
  static async getInitialProps() {
    const afr = await afrRef.once('value').then(s => s.val());
    const jdo = await jdoRef.once('value').then(s => s.val());
    return { afr, jdo };
  }
  constructor(props) {
    super(props);
    const { afr, jdo } = props;
    this.state = { afr, jdo };
  }
  componentDidMount() {
    afrRef.on('value', s => this.setState({ afr: s.val() }));
    jdoRef.on('value', s => this.setState({ jdo: s.val() }));
  }

  voteAFR() {
    /*
    Suivre les instructions dans la Part Two du guide
    */
  }
  voteJDO() {
    /*
    Suivre les instructions dans la Part Two du guide et s'inspirer de voteAFR()
    */
  }

  render() {
    const { afr, jdo } = this.state;
    return (
      <Layout>
        {/* Ajouter le Background Ici, penser à mettre les scores de afr et jdo */}
        <Container
          style={{
            flex: '1 1 100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
          }}
          column
        >
          <Title>Choisis<br /><span>ton champion</span></Title>
          <Container style={{ flex: 1 }}>
            <Container column>
              {/* Mettre la bonne souce pour l'image de afr */}
              <Avatar src="static/afr.jpg" />
              <Button onClick={() => this.voteAFR()}>
                VOTER<br />AFR
              </Button>
              {/*
                Ajouter le composant Score de afr ici
                Pense à importer le composant Score en haut du fichier : 'import Score from '../composants/score';'
                Astuce : pour ajouter le score dans le text, faire comme ceci : <div>{afr} pts</div>
                N'oublie pas de remplace le composant div par Score
              */}
            </Container>
            <Span>VS.</Span>
            <Container column>
              {/* Mettre la bonne souce pour l'image de jdo */}
              <Avatar src="static/jdo.jpg" />
              <Button onClick={() => this.voteJDO()}>VOTER<br />JDO</Button>
              {/*
                Ajouter le composant Score de jdo ici
                Rappel: le score de jdo est dans la variable 'jdo'
              */}
            </Container>
          </Container>
        </Container>
      </Layout>
    );
  }
}

export default Home;
