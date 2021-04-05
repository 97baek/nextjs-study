import React from 'react';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

function Top() {
  return (
    <div style={{ display: 'flex', paddingTop: 20 }}>
      <div style={{ flex: 1 }}>
        <img src="/img/IMG_7777.jpg" alt="logo" style={{ display: 'block', width: 80 }} />
        <Header as="h1">백상흔</Header>
        <Gnb />
      </div>
    </div>
  );
}

export default Top;
