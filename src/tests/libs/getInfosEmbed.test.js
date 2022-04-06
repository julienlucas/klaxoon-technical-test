import getInfosEmbed from '../../libs/getInfosEmbed';
import '@testing-library/jest-dom';

test('Flickr - Should get author_name, title, height, width and url on getNoEmbed Flickr URL', async () => {
    const res = await getInfosEmbed('https://www.flickr.com/photos/feuilllu/45771361701/');

    expect(res).toEqual(
        expect.objectContaining({
            author_name: expect.any(String),
            title: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            url: expect.any(String),
        })
    );
});

test('Vimeo - Should get author_name, title, duration and url on getNoEmbed Vimeo URL', async () => {
    const res = await getInfosEmbed('https://vimeo.com/565486457');

    expect(res).toEqual(
        expect.objectContaining({
            author_name: expect.any(String),
            title: expect.any(String),
            duration: expect.any(Number),
            url: expect.any(String),
        })
    );
});