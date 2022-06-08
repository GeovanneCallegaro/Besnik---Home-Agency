import * as C from './styles';
import CardInfo from '../../assets/images/info-card.png';
import HouseFour from '../../assets/images/house-four.png';
import { Line } from '../../components/Line';
import { InfosNumber } from '../../components/InfosNumber';

export const FeaturedNumbers = () => {
  return (
    <C.Container>
      <C.TextContainer>
        <C.ImageContainer>
          <img src={CardInfo} alt="Infos" className="card" />
          <img src={HouseFour} alt="Casa" className="house" />
        </C.ImageContainer>
        <C.InfosTextContainer>
          <Line width="40" />
          <h2>You’ve found a neighborhood you love.</h2>
          <p>
            When you own a home, you’re committing to living in one location for
            a while. In a recent Trulia survey, we found that five out of six
            respondents said finding the right neighborhood
          </p>
        </C.InfosTextContainer>
      </C.TextContainer>
      <C.InfosContainer>
        <InfosNumber number="2,500" description="Homes For Sale" />
        <InfosNumber number="5,000+" description="Homes Recently Sold" />
        <InfosNumber number="170+" description="Price Reduced" />
      </C.InfosContainer>
    </C.Container>
  );
};
