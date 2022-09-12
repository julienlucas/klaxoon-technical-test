import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const SBookmarks = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 20px;
    width: 100%;
`

export const SBookmark = styled.div`;
    position: relative;
    height: 400px;
    border-radius: 16px;
    border: 1px solid ${theme.lightGrey};
    font-size: 30px;
    text-align: center;
    overflow: hidden;

    iframe {
        width: 100%;
        height: 220px;
        border: 0;
    }
`

export const SBookmarkInfos = styled.div`
    color: ${theme.darkGrey};
    padding: 20px;

    * {
        margin: 0;
        padding: 0;
        text-align: left;
        font-size: 12px;
        color: ${theme.darkGrey}
    }

    h3 {
        font-size: 14px;
        color: ${theme.black}
    }
`

export const SButtonRemove = styled.button`;
    position: absolute;
    right: 20px;
    bottom: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0 10px;
    height: 36px;
    line-height: 36px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    color: ${theme.darkGrey};
    background: ${theme.lightGrey};
    border: 0;
    outline: none;
    user-select: none;
    border-radius: 16px;
    font-size: 14px;
    cursor: pointer;
    transition: opacity .2s;

    &:hover {
       opacity: .7;
    }
`

export const SFlickrMedia = styled.div<FlickrMedia>`
    position: relative;
    width: auto;
    height: 220px;
    background-image: url(${({ mediaURL }) => mediaURL});
    background-size: cover;
`

type FlickrMedia = {
    mediaURL: string
};
