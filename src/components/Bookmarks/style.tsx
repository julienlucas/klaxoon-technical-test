import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const SBookmarks = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    width: 100%;
`

export const SBookmark = styled.div`;
    position: relative;
    height: 440px;
    border-radius: 4px;
    border: 1px solid ${theme.lightGrey};
    font-size: 30px;
    text-align: center;
    overflow: hidden;

    iframe {
        width: 100%;
        height: 280px;
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
