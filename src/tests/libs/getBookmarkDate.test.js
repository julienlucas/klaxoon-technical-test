import { getBookmarkDate } from '../../libs/getBookmarkDate';
import '@testing-library/jest-dom';

test('Should show the right string of bookmark publish date', async () => {
    const bookmarkDateString1 = await getBookmarkDate(new Date(Date.now()));
    const bookmarkDateString2 = await getBookmarkDate(38820);

    expect(bookmarkDateString1).toEqual('Juste maintenant');
    expect(bookmarkDateString2).toEqual('56 années');
});