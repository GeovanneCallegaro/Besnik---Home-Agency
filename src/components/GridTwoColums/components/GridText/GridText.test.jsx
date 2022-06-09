import { renderTheme } from '../../../../styles/render-theme';
import { GridText } from '.';
import { screen } from '@testing-library/react';

describe('<GridText />', () => {
  it('should render', () => {
    renderTheme(<GridText></GridText>);
    expect(screen.getByText('Welcome to Besnik Agency')).toBeInTheDocument();
  });
});
