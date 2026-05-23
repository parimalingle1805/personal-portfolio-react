import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock IntersectionObserver for react-awesome-reveal
global.IntersectionObserver = class IntersectionObserver {
  // constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

test('renders App component without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByTestId('app')).toBeInTheDocument();
});
