import * as C from './styles';
import P from 'prop-types';

// eslint-disable-next-line no-unused-vars
export const NavBar = ({ menuText }) => {
  return (
    <C.Container>
      <C.LinksContainer>
        {menuText.map((link) => (
          <C.NavLink key={link}>{link}</C.NavLink>
        ))}
      </C.LinksContainer>
    </C.Container>
  );
};

NavBar.propTypes = {
  menuText: P.arrayOf(['Home', 'Features', 'Service', 'Listed', 'Contact'])
    .isRequired,
};
