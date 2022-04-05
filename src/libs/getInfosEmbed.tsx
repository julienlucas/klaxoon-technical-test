export default async function getInfoEmbed(url: string) {
    try {
        const res = await fetch(`https://noembed.com/embed?url=${url}`);
        const embedInfos = await res.json();

        return embedInfos;
    } catch (err) {
        console.error(err);
    }
};