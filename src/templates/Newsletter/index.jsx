import * as C from './styles';
import { Button } from '../../components/Button';
import HouseIllustration from '../../assets/images/house-news.svg';

export const Newsletter = () => {
  return (
    <C.Container>
      <C.Background>
        <C.TextContainer>
          <h2>Featured Properties</h2>
          <p>Everything you need to know when you are looking</p>
          <Button background={false}>Get Started Now</Button>
        </C.TextContainer>
        <C.ImageIllustration>
          <img src={HouseIllustration} alt="Imagem" loading="lazy" />
        </C.ImageIllustration>
      </C.Background>
    </C.Container>
  );
};
