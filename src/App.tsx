import Bookmarks from './components/Bookmarks';
import Form from './components/Form';

import BookmarksProvider from './context/bookmarksProvider';
import { SApp, SHeader, SWrapper } from './style';

function App() {
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
