export const getFormatedTime = (seconds: number) => {
    seconds = Number(seconds);

    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? ':' : ':') : '';
    const mDisplay = m + ':';
    const sDisplay = s;

    return hDisplay + mDisplay + sDisplay;
};
