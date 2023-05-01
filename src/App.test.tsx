import { describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import WrappedApp, { App } from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // Arrange
    render(<WrappedApp />);
    // Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });

  it('Renders not found if invalid path', async () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/this-router-doesnot-exist']}>
        <App />
      </MemoryRouter>
    );

    // Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');

    // Act
    const link = screen.getByRole('link', { name: 'Go Home' });
    fireEvent.click(link);
    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });
});
