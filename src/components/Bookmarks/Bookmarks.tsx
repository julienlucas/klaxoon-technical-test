import React from 'react';
import { SBookmarks, SBookmarkInfos, SBookmarkItem } from './style';

function Bookmarks() {
    return (
        <SBookmarks>
            <SBookmarkItem>
                <iframe
                    src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                    data-allow="autoplay; encrypted-media"
                    title="video"
                />
                <SBookmarkInfos>
                    <p><em>https://www.youtube.com/embed/E7wJTI-1dvQ</em></p>
                    <h3>Titre de la vidéo</h3>
                    <p>Date d'ajout dans l'application</p>
                    <p>Auteur</p>
                    <p>Boomarké le ....</p>
                    <p>Durée</p>
                </SBookmarkInfos>
            </SBookmarkItem>
            <SBookmarkItem>2</SBookmarkItem>
            <SBookmarkItem>3</SBookmarkItem>
            <SBookmarkItem>4</SBookmarkItem>
            <SBookmarkItem>5</SBookmarkItem>
            <SBookmarkItem>6</SBookmarkItem>
        </SBookmarks>
    )
};

export default Bookmarks;
