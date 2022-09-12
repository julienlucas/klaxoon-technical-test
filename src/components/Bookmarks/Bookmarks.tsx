import { useContext } from 'react';
import { SBookmarks } from './style';
import Bookmark from './Bookmark';

import { BookmarksContextType } from '../../@types/bookmarks.type';
import { BookmarksContext } from '../../context/bookmarksProvider';

function Bookmarks() {
    const { bookmarks } = useContext(BookmarksContext) as BookmarksContextType;

    return (
        <SBookmarks data-testid={'bookmarks'}>
            {bookmarks?.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark} index={index} />)}
        </SBookmarks>
    )
};

export default Bookmarks;
