import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('<Header />', () => {
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }));

  const setState = jest.fn();

  beforeEach(() => {
    setState.mockImplementation((init) => [init, setState]);
  });

  it('should render logo and menu desktop', () => {
    renderTheme(<Header></Header>);
    expect(screen.getByAltText('Logo da empresa Besnik')).toBeInTheDocument();
  });

  it('should button called function on click', () => {
    const { container } = renderTheme(<Header></Header>);
    const icon = container.querySelector('.menu');
    icon.addEventListener('click', setState);

    userEvent.click(icon);
    expect(setState).toHaveBeenCalled();
  });
});
