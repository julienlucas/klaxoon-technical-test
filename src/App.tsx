import React from 'react';

import Bookmarks from './components/Bookmarks';
import Form from './components/Form';

import { SApp, SHeader, SWrapper } from './style';

function App() {
  return (
    <SApp>
      <SWrapper>
        <SHeader />
        <Form />
        <Bookmarks />
      </SWrapper>
    </SApp>
  );
}

export default App;
