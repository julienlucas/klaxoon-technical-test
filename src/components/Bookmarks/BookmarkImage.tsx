import { BookmarkProps } from '../../@types/bookmarks.type';
import { getBookmarkDate } from '../../libs/getBookmarkDate';

import { SBookmarkInfos, SButtonRemove, SFlickrMedia } from './style';

export const BookmarkImage: React.FC<BookmarkProps> = ({ bookmark, onRemoveBookmark }) => {
    return (
        <>
            <SFlickrMedia mediaURL={bookmark?.media_url} />
            <SBookmarkInfos>
                <p><em>{bookmark?.url.substring(0,38)}...</em></p>
                <h3>{bookmark?.title}</h3>
                <p>{bookmark?.author_name}</p>
                <p>Boomarké le : {getBookmarkDate(new Date(Date.now()))}</p>
                <p>{bookmark?.width}{bookmark?.width && ' x '}{bookmark?.height}</p>
                <SButtonRemove
                    data-testid={`remove-button-${bookmark.url}`}
                    onClick={onRemoveBookmark}
                >
                    Retirer
                </SButtonRemove>
            </SBookmarkInfos>
        </>
    )
};

export default BookmarkImage;