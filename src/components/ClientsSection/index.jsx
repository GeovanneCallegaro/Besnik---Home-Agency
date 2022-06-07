import * as C from './styles';
import BesnikLogo from '../../assets/images/Logo.svg';
import Stars from '../../assets/images/Star.svg';
import { Logos } from './components/Logos';

export const ClientsSection = () => {
  return (
    <C.Container>
      <C.SectionUpper>
        <C.TextEmprise>
          <img src={BesnikLogo} alt="Logo com nome da Besnik" />
          <p>More than 45,000+ companies trust besnik </p>
        </C.TextEmprise>
        <C.RatedEmprise>
          <img src={Stars} alt="Estrelas de avaliação" />
          <p>5 Star Ratings (2k+ Review)</p>
        </C.RatedEmprise>
      </C.SectionUpper>
      <Logos />
    </C.Container>
  );
};
