import { useState, createContext } from 'react';
import { Bookmark, BookmarksContextType } from '../@types/bookmarks.d';

export const BookmarksContext = createContext<BookmarksContextType | null>(null);

const BookmarksProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [bookmarks, setBookmarks] = useState<Bookmark[] | []>([]);

    return <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>{children}</BookmarksContext.Provider>;
};

export default BookmarksProvider;
