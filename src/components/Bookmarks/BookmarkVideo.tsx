import { BookmarkProps } from '../../@types/bookmarks.d';
import { getFormatedTime } from '../../libs/getFormatedTime';
import { SBookmarkInfos, SButtonRemove } from './style';

export const BookmarkVideo: React.FC<BookmarkProps> = ({ bookmark, onRemoveBookmark }) => {
    return (
        <>
            <iframe
                src={`https://player.vimeo.com/video/${bookmark?.video_id}`}
                title={bookmark?.title}
                allow="fullscreen"
            />
            <SBookmarkInfos>
                <p><em>{bookmark?.url}</em></p>
                <h3>{bookmark?.title}</h3>
                <p>Auteur: {bookmark?.author_name}</p>
                <p>Boomarké le : indisponible</p>
                <p>Date de publication : indisponible</p>
                <p>{bookmark?.duration && getFormatedTime(bookmark.duration)}</p>
                <SButtonRemove data-testid={`remove-button-${bookmark.url}`} onClick={onRemoveBookmark}>Retirer</SButtonRemove>
            </SBookmarkInfos>
        </>
    )
};

export default BookmarkVideo;