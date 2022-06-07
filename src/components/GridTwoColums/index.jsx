import { GridText } from './components/GridText';
import * as C from './styles';
import HouseImage from '../../assets/images/house.svg';

export const GridTwoColums = () => {
  return (
    <C.Container>
      <GridText />
      <img src={HouseImage} alt="Imagem de uma casa" />
    </C.Container>
  );
};
