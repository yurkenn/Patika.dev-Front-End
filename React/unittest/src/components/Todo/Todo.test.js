import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './index';

describe('Todo testleri', () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText('Add');
    input = screen.getByLabelText('Text');
  });

  test('Varsayilan olarak verilen 3 nesne render edilmeli', () => {
    const items = screen.getAllByText(/item/i);
    expect(items.length).toEqual(3);
  });

  test('input ve button dokumanda bulunmali', () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('input string girilip butona basilinca listeye eklenmeli', () => {
    console.log('inputu doldur butoan tikla');
    const name = 'mehmet';
    userEvent.type(input, name);

    //butona tikla
    userEvent.click(button);

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
