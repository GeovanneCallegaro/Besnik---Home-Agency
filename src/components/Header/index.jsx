import * as C from './styles';
import BesnikLogo from '../../assets/images/Logo.svg';
import { NavBar } from './components/NavBar';
import { Button } from '../Button';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const menuContainer = document.querySelector('.kxWcyV');
    if (isOpen === false) {
      setIsOpen(true);
      menuContainer.style.display = 'flex';
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <C.Container>
      <C.LogoAndMenu>
        <C.LogoContainer>
          <img src={BesnikLogo} alt="Logo da empresa Besnik" />
        </C.LogoContainer>
        <NavBar
          menuText={['Home', 'Features', 'Service', 'Listed', 'Contact']}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </C.LogoAndMenu>
      <AiOutlineMenu className="menu" onClick={() => handleClick()} />
      <C.ButtonsSection>
        <Button background={false}>Sign Up</Button>
        <Button background>Register</Button>
      </C.ButtonsSection>
    </C.Container>
  );
};
