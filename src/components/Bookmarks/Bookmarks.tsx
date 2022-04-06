import { useContext } from 'react';
import { SBookmarks } from './style';
import Bookmark from './Bookmark';

import { BookmarksContextType } from '../../@types/bookmarks.d';
import { BookmarksContext } from '../../context/bookmarksProvider';

function Bookmarks() {
    const { bookmarks } = useContext(BookmarksContext) as BookmarksContextType;

    return (
        <SBookmarks data-testid={'bookmarks'}>
            {bookmarks?.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark} index={i} />)}
        </SBookmarks>
    )
};

export default Bookmarks;
