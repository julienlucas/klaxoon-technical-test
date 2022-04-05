import { useState } from 'react';

import Bookmarks from './components/Bookmarks';
import Form from './components/Form';

// import BookmarksContext from './context/context';
import BookmarksProvider from './context/bookmarksProvider';
import { SApp, SHeader, SWrapper } from './style';

function App() {
  const [bookmarks, setBookmarks] = useState({});
  const value = { bookmarks, setBookmarks };

  return (
    <SApp>
      <BookmarksProvider>
        <SWrapper>
          <SHeader />
          <Form />
          <Bookmarks />
        </SWrapper>
      </BookmarksProvider>
    </SApp>
  );
};

export default App;
