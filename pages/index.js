import React, { Component } from 'react';
import fetch from 'node-fetch';
import Layout from '../layout';
import { createComponent } from 'react-fela';

import { hasVoted, setVote } from '../utils';
import F from '../firebase';

import Avatar from '../components/avatar';
import Background from '../components/background';
import Button from '../components/button';
import Container from '../components/container';
import Score from '../components/score';
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
    const pts = this.state.afr + 1;
    if (!hasVoted()) {
      setVote();
      afrRef.set(pts);
    }
  }
  voteJDO() {
    const pts = this.state.jdo + 1;
    if (!hasVoted()) {
      setVote();
      jdoRef.set(pts);
    }
  }

  render() {
    const { afr, jdo } = this.state;
    return (
      <Layout>
        <Background afr={afr} jdo={jdo} />
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
              <Avatar src="static/afr.jpg" />
              <Button onClick={() => this.voteAFR()}>
                VOTER<br />AFR
              </Button>
              <Score>{afr} pts</Score>
            </Container>
            <Span>VS.</Span>
            <Container column>
              <Avatar src="static/jdo.jpg" />
              <Button onClick={() => this.voteJDO()}>VOTER<br />JDO</Button>
              <Score>{jdo} pts</Score>
            </Container>
          </Container>
        </Container>
      </Layout>
    );
  }
}

export default Home;
