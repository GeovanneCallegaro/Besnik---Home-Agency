import * as C from './styles';
import { Line } from '../../components/Line';
import { SellerTypes } from '../../components/SellerTypes';

export const Works = () => {
  return (
    <C.Container>
      <C.TextContainer>
        <Line width="40" />
        <h2>How its works?</h2>
        <p>
          Everything you need to know when you are looking to buy, rent, or sell
          - all in one place.
        </p>
      </C.TextContainer>
      <SellerTypes />
    </C.Container>
  );
};
