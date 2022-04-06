import { getFormatedTime } from '../../libs/getFormatedTime';
import '@testing-library/jest-dom';

test('Should the duration at format HH:MM:SS', async () => {
    const timeFormated1 = await getFormatedTime(2000);
    const timeFormated2 = await getFormatedTime(38820);

    expect(timeFormated1).toEqual('33:20');
    expect(timeFormated2).toEqual('10:47:0');
});