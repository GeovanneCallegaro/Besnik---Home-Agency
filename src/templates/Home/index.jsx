import { GridTwoColums } from '../../components/GridTwoColums';
import { Header } from '../../components/Header';
import * as C from './styles';

export const Home = () => {
  return (
    <C.Container>
      <Header />
      <GridTwoColums />
    </C.Container>
  );
};
