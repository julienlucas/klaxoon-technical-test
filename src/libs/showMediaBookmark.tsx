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
            <img src={bookmark?.thumbnail_url} alt="" title="" />
        )
    };

    return <></>
};

export default showMediaBookmark;