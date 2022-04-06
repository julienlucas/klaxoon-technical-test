export type Bookmark = {};

export type BookmarksContextType = {
    bookmarks: Bookmark[];
    setBookmarks: (bookmarks: Bookmark[]) => void;
};

export interface BookmarkProps {
    bookmark: any;
    index: number;
    onRemoveBookmark: () => void;
};