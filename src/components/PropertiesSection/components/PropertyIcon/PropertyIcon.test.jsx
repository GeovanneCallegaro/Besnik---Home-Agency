import { renderTheme } from '../../../../styles/render-theme';
import { PropertyIcon } from '.';
import { screen } from '@testing-library/react';

describe('<PropertyIcon />', () => {
  it('should render', () => {
    renderTheme(
      <PropertyIcon
        srcImage="img1.png"
        price={20}
        address="Test"
        numberBaths={1}
        numberBeds={1}
        numberSqft={1}
      />,
    );
    expect(screen.getByAltText('Foto da casa')).toBeInTheDocument();
  });
});
