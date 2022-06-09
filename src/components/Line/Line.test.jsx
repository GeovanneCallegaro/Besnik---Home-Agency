import { renderTheme } from '../../styles/render-theme.js';
import { Line } from '.';

describe('<Line />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Line width="10px"></Line>);
    expect(container).toBeInTheDocument();
  });
});
