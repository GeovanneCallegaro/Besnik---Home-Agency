import { renderTheme } from '../../styles/render-theme';
import { ClientsSection } from '.';
import { screen } from '@testing-library/react';

describe('<ClientsSection />', () => {
  it('should render', () => {
    renderTheme(<ClientsSection></ClientsSection>);
    expect(screen.getByAltText('Logo com nome da Besnik')).toBeInTheDocument();
    expect(
      screen.getByText('More than 45,000+ companies trust besnik'),
    ).toBeInTheDocument();
  });
});
