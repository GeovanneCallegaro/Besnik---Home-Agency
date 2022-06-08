import { PropertyIcon } from './components/PropertyIcon';
import * as C from './styles';
import HouseOne from '../../assets/images/house-one.png';
import HouseTwo from '../../assets/images/house-two.png';
import HouseThree from '../../assets/images/house-three.png';

export const PropertiesSection = () => {
  return (
    <C.Container>
      <PropertyIcon
        srcImage={HouseOne}
        price={35000}
        address="8502 Preston Rd. Inglewood, Maine 98280"
        numberBeds={5}
        numberBaths={2}
        numberSqft={2000}
      />
      <PropertyIcon
        srcImage={HouseTwo}
        price={35000}
        address="8502 Preston Rd. Inglewood, Maine 98280"
        numberBeds={5}
        numberBaths={2}
        numberSqft={2000}
      />
      <PropertyIcon
        srcImage={HouseThree}
        price={35000}
        address="8502 Preston Rd. Inglewood, Maine 98280"
        numberBeds={5}
        numberBaths={2}
        numberSqft={2000}
      />
    </C.Container>
  );
};
