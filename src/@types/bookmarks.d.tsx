export interface Bookmark {
    [key: string]: any;
};

export type BookmarksContextType = {
    bookmarks: Bookmark[];
    setBookmarks: (bookmarks: Bookmark[]) => void;
};

export interface BookmarkProps {
    bookmark: Bookmark;
    onRemoveBookmark: () => void;
};