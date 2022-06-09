import { renderTheme } from '../../../../styles/render-theme';
import { Logos } from '.';
import { screen } from '@testing-library/react';

describe('<Logos />', () => {
  it('should render', () => {
    renderTheme(<Logos></Logos>);
    expect(screen.getByAltText('Logo da MeUndies')).toBeInTheDocument();
  });
});
