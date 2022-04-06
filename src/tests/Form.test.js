import { fireEvent, waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookmarksProvider from '../context/bookmarksProvider';
import App from '../App';

// Need this fix otherwise there's a React 18 red error
const originalError = console.error;
beforeAll(() => {
    console.error = (...args) => {
        if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});

const urlTest1 = 'https://www.flickr.com/photos/feuilllu/45771361701/';
const urlTest2 = 'https://vimeo.com/565486457';

describe('Form test', () => {
    test('Should show the bookmark added', async () => {
        const { getByTestId } = render(
            <BookmarksProvider value={[]}>
                <App />
            </BookmarksProvider>
        );

        fireEvent.change(getByTestId('input'), { target: { value: urlTest1 } });
        expect(getByTestId('input').value).toBe(urlTest1);
        await waitFor(() => fireEvent.click(getByTestId('submit')));

        await waitFor(() => expect(getByTestId('bookmarks')).toHaveTextContent(urlTest1));

        await waitFor(() => new Promise((r) => setTimeout(r, 500))); // Small delay to not bypass the delay between two request on noembed API server
        fireEvent.change(getByTestId('input'), { target: { value: urlTest2 } });
        await waitFor(() => fireEvent.click(getByTestId('submit')));

        await waitFor(() => expect(getByTestId('bookmarks')).toHaveTextContent(urlTest1));
        await waitFor(() => expect(getByTestId('bookmarks')).toHaveTextContent(urlTest2));
    });

    test('Should remove the right bookmark on click remove-button', async () => {
        const { getByTestId } = render(
            <BookmarksProvider>
                <App />
            </BookmarksProvider>
        );

        fireEvent.change(getByTestId('input'), { target: { value: urlTest1 } });
        await waitFor(() => fireEvent.click(getByTestId('submit')));
        await waitFor(() => new Promise((r) => setTimeout(r, 500))); // Small delay to not bypass the delay between two request on noembed API server
        fireEvent.change(getByTestId('input'), { target: { value: urlTest2 } });
        await waitFor(() => fireEvent.click(getByTestId('submit')));

        await waitFor(() => expect(getByTestId('bookmarks')).toHaveTextContent(urlTest1));
        await waitFor(() => expect(getByTestId('bookmarks')).toHaveTextContent(urlTest2));

        await waitFor(() => fireEvent.click(getByTestId(`remove-button-${urlTest1}`)));
        await waitFor(() => expect(getByTestId('bookmarks')).not.toHaveTextContent(urlTest1));
        await waitFor(() => expect(getByTestId('bookmarks')).toHaveTextContent(urlTest2));

        await waitFor(() => fireEvent.click(getByTestId(`remove-button-${urlTest2}`)));
        await waitFor(() => expect(getByTestId('bookmarks')).not.toHaveTextContent(urlTest1));
        await waitFor(() => expect(getByTestId('bookmarks')).not.toHaveTextContent(urlTest2));
    });
});