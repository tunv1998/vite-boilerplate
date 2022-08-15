import { expect, it } from 'vitest';

import App from './App';
import { render, screen } from './testUtils';

it('Should return dummy data', () => {
  expect(Math.sqrt(4)).toBe(2);
});

it('Render well', () => {
  render(<App />);
  expect(screen.getByTestId('text')).toBeDefined();
});
