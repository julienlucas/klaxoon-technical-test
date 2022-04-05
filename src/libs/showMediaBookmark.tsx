import styled from 'styled-components';

const showMediaBookmark = (bookmark: any) => {
    if (bookmark?.url?.includes('youtube')) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${bookmark?.url.split('watch?v=')[1]}`}
                title={bookmark?.title}
                allow="fullscreen"
            />
        )
    }

    if (bookmark?.url?.includes('flickr')) {
        return (
            <SFlickrMedia mediaURL={bookmark?.media_url} />
        )
    };

    return <></>
};

export default showMediaBookmark;

interface FlickrMedia {
    mediaURL: string
};

export const SFlickrMedia = styled.div<FlickrMedia>`
    position: relative;
    width: auto;
    height: 280px;
    background-image: url(${({ mediaURL }) => mediaURL });
    background-size: cover;
`