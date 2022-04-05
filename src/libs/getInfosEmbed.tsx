export default async function getInfoEmbed() {
    try {
        const res = await fetch(
            'http://noembed.com/embed?url=http%3A//www.youtube.com/watch%3Fv%3DbDOYN-6gdRE&callback=my_embed_function'
        );
        const fileInfos = await res.json();
        console.log(fileInfos);
    } catch (err) {
        console.error(err);
    }
};