/* eslint-disable react/no-unescaped-entities */
import * as C from './styles';
import { Button } from '../../../Button';

export const GridText = () => {
  return (
    <C.Container>
      <p>Welcome to Besnik Agency</p>
      <h1>Discover a place you'll love to live.</h1>
      <p>
        Get the best real estate deals first, before they hit the mass market!
        HOT FORECLOSURE DEALS with one simple search
      </p>
      <Button background> More About Us</Button>
    </C.Container>
  );
};
