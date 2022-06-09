import * as C from './styles';
import BesnikLogo from '../../assets/images/Logo.svg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { RiPagesLine } from 'react-icons/ri';

export const Footer = () => {
  return (
    <C.Container>
      <C.LogoContainer>
        <img src={BesnikLogo} alt="Logo da Besnik" />
      </C.LogoContainer>
      <C.SocialMediaContainer>
        <a href="https://www.linkedin.com/in/geovannecallegaro/">
          <AiFillLinkedin className="icon" />
        </a>
        <a href="https://github.com/GeovanneCallegaro">
          <AiFillGithub className="icon" />
        </a>
        <a href="https://devgeovannecallegaro.vercel.app">
          <RiPagesLine className="icon" />
        </a>
      </C.SocialMediaContainer>
    </C.Container>
  );
};
