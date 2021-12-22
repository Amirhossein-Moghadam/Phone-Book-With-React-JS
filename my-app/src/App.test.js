/* eslint-disable jest/valid-title */
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('This is a React App.', () => {
  test('Test the project', () => {

    expect(2 + 2).toEqual(4);

    const { container } = render(<App />);

    //unit test
    expect(screen.getByText(/My Phone Book/i)).toBeInTheDocument();

    expect(container.querySelector('#search')).toBeInTheDocument();
    expect(container.querySelector('#search')).toHaveValue('');

    expect(container.querySelector('#add')).toBeInTheDocument();

    expect(container.querySelector('#name')).not.toBeInTheDocument('');
    expect(container.querySelector('#phone')).not.toBeInTheDocument('');

    // integration test
    fireEvent.click(container.querySelector('#add'));
    expect(container.querySelector('#name')).toBeInTheDocument('');
    expect(container.querySelector('#phone')).toBeInTheDocument('');
    expect(container.querySelector('#search')).not.toBeInTheDocument();

    expect(container.querySelector('#name')).toHaveValue('');
    expect(container.querySelector('#phone')).toHaveValue('');

    // add contact
    fireEvent.change(container.querySelector('#name'), { target: { value: 'Amir' } });
    expect(container.querySelector('#name')).toHaveValue('Amir');

    fireEvent.change(container.querySelector('#phone'), { target: { value: '09123456789' } });
    expect(container.querySelector('#phone')).toHaveValue('09123456789');

    fireEvent.click(container.querySelector('#add'));

    expect(container.querySelector('#table')).toBeInTheDocument();

    expect(container.querySelector('#idItem')).toHaveTextContent('1')
    expect(container.querySelector('#nameItem')).toHaveTextContent('Amir')
    expect(container.querySelector('#phoneItem')).toHaveTextContent('09123456789')

    expect(container.querySelector('#edit')).toBeInTheDocument();
    expect(container.querySelector('#remove')).toBeInTheDocument();

    fireEvent.click(container.querySelector('#remove'));
    expect(container.querySelector('#table')).not.toBeInTheDocument();
  })
})
