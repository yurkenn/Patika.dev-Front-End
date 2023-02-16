import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';

describe('Counter Tests', () => {
  let increaseBtn, decreaseBtn, count;
  beforeEach(() => {
    console.log('her testten once calirim');
    render(<Counter />);
    count = screen.getByText('0');
    increaseBtn = screen.getByText('Increase');
    decreaseBtn = screen.getByText('Decrease');
  });

  beforeAll(() => {
    console.log('ilk basta bir kere calirim');
  });

  afterEach(() => {
    console.log('her testten sonra calirim');
  });

  afterAll(() => {
    console.log('en son bir kere calisirim');
  });

  test('increase btn', () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent('1');
  });

  test('decrease btn', () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent('-1');
  });
});
