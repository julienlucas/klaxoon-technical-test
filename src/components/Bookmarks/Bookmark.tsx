import { SBookmarkInfos, SBookmark } from './style';
import showMediaBookmark from '../../libs/showMediaBookmark';

interface Props {
    bookmark: any;
};

const Bookmark: React.FC<Props> = ({ bookmark }) => {
    return (
        <SBookmark>
            {bookmark.url && showMediaBookmark(bookmark)}

            <SBookmarkInfos>
                <p><em>{bookmark?.url}</em></p>
                <h3>{bookmark?.title}</h3>
                <p>Date d'ajout dans l'application : ...</p>
                <p>Auteur: {bookmark?.author_name}</p>
                <p>Boomarké le : ....</p>
                <p>Durée : ...</p>
            </SBookmarkInfos>
        </SBookmark>
    )
};

export default Bookmark;