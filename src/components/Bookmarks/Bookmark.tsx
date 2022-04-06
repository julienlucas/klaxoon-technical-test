import { useContext, useEffect } from 'react';

import { BookmarksContextType } from '../../@types/bookmarks.d';
import { BookmarksContext } from '../../context/bookmarksProvider';

import { getTimeToFormat } from '../../libs/getTimeToFormat';

import { SBookmarkInfos, SBookmark, SButtonRemove, SFlickrMedia } from './style';

const Bookmark: React.FC<Props> = ({ bookmark, index }) => {
    const { bookmarks, setBookmarks } = useContext(BookmarksContext) as BookmarksContextType;

    const onRemoveBookmark = (index: number): void => {
        const newBookmarks = [...bookmarks]
        newBookmarks.splice(index, 1);

        setBookmarks(newBookmarks);
    };

    const showMediaBookmark = (bookmark: any) => {
        if (bookmark?.url?.includes('vimeo')) {

            console.log(bookmark)

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
                        <p>{bookmark?.duration && getTimeToFormat(bookmark.duration)}</p>
                        <SButtonRemove onClick={() => onRemoveBookmark(index)}>Retirer</SButtonRemove>
                    </SBookmarkInfos>
                </>
            )
        };

        if (bookmark?.url?.includes('flickr')) {
            return (
                <>
                    <SFlickrMedia mediaURL={bookmark?.media_url} />
                    <SBookmarkInfos>
                        <p><em>{bookmark?.url}</em></p>
                        <h3>{bookmark?.title}</h3>
                        <p>{bookmark?.author_name}</p>
                        <p>Boomarké le : indisponible</p>
                        <p>Date de publication : indisponible</p>
                        <p>{bookmark?.width}{bookmark?.width && ' x '}{bookmark?.height}</p>
                        <SButtonRemove onClick={() => onRemoveBookmark(index)}>Retirer</SButtonRemove>
                    </SBookmarkInfos>
                </>
            )
        };

        return <></>
    };

    return (
        <SBookmark>
            {bookmark.url && showMediaBookmark(bookmark)}
        </SBookmark>
    )
};

export default Bookmark;

interface Props {
    bookmark: any;
    index   : number;
};