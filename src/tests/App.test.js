import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

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

test('Should render app', () => {
  render(<App />);
  const linkElement = screen.getByText('Ajouter en bookmark');
  expect(linkElement).toBeInTheDocument();
});