import * as C from './styles';
import P from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { useRef } from 'react';
import { Button } from '../../../Button';

// eslint-disable-next-line no-unused-vars
export const NavBar = ({ menuText, isOpen, setIsOpen }) => {
  const menuContainer = useRef(undefined);
  const windowWidth = window.screen.width;

  const handleMenu = () => {
    if (isOpen === true) {
      menuContainer.current.style.display = 'none';
      document.body.style.height = 'inherit';
      document.body.style.overflow = 'inherit';
      setIsOpen(false);
    }
  };

  return (
    <C.Container>
      <C.LinksContainer ref={menuContainer} id="containerMenu">
        {menuText.map((link) => (
          <a href={`#${link}`} key={link}>
            <C.NavLink onClick={() => handleMenu()}>{link}</C.NavLink>
          </a>
        ))}
        {windowWidth <= 810 && (
          <C.ButtonsSection>
            <Button background={false}>Sign In</Button>
            <Button background>Register</Button>
          </C.ButtonsSection>
        )}
        <AiOutlineClose className="close" onClick={() => handleMenu()} />
      </C.LinksContainer>
    </C.Container>
  );
};

NavBar.propTypes = {
  menuText: P.arrayOf(['Home', 'Features', 'Service', 'Listed', 'Contact'])
    .isRequired,
  isOpen: P.bool.isRequired,
  setIsOpen: P.func.isRequired,
};
