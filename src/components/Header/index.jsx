import * as C from './styles';
import BesnikLogo from '../../assets/images/Logo.svg';
import { NavBar } from './components/NavBar';
import { Button } from '../Button';

export const Header = () => {
  return (
    <C.Container>
      <C.LogoAndMenu>
        <C.LogoContainer>
          <img src={BesnikLogo} alt="Logo da empresa Besnik" />
        </C.LogoContainer>
        <NavBar
          menuText={['Home', 'Features', 'Service', 'Listed', 'Contact']}
        />
      </C.LogoAndMenu>
      <C.ButtonsSection>
        <Button background={false}>Sign Up</Button>
        <Button background>Register</Button>
      </C.ButtonsSection>
    </C.Container>
  );
};
