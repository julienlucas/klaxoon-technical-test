import { useContext } from 'react';

import { BookmarkVideo, BookmarkImage } from './';

import { BookmarksContextType } from '../../@types/bookmarks.type';
import { BookmarksContext } from '../../context/bookmarksProvider';

import { SBookmark } from './style';

const Bookmark: React.FC<Props> = ({ bookmark, index }) => {
    const { bookmarks, setBookmarks } = useContext(BookmarksContext) as BookmarksContextType;

    const onRemoveBookmark = (index: number): void => {
        const newBookmarks = [...bookmarks]
        newBookmarks.splice(index, 1);

        setBookmarks(newBookmarks);
    };

    return (
        <SBookmark>
            {(bookmark?.url?.includes('https://www.flickr.com') || bookmark?.url?.includes('http://www.flickr.com')) &&
                <BookmarkImage bookmark={bookmark} onRemoveBookmark={() => onRemoveBookmark(index)} />}

            {(bookmark?.url?.includes('https://vimeo.com') || bookmark?.url?.includes('http://vimeo.com')) &&
                <BookmarkVideo bookmark={bookmark} onRemoveBookmark={() => onRemoveBookmark(index)} />}
        </SBookmark>
    )
};

export default Bookmark;

interface Props {
    bookmark: any;
    index   : number;
};