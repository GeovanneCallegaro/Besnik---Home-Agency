import { renderTheme } from '../../styles/render-theme';
import { Button } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Button />', () => {
  it('should render', () => {
    renderTheme(<Button background>Children</Button>);
    expect(
      screen.getByRole('button', { value: 'Children' }),
    ).toBeInTheDocument();
  });

  it('should render with background white', () => {
    renderTheme(<Button background={false}>Children</Button>);
    const button = screen.getByRole('button', { value: 'Children' });
    expect(button).toHaveStyle({
      'background-color': '#FFF',
    });
  });

  it('should render with background black', () => {
    renderTheme(<Button background>Children</Button>);
    const button = screen.getByRole('button', { value: 'Children' });
    expect(button).toHaveStyle({
      'background-color': theme.colors.buttonBgColor,
    });
  });
});
