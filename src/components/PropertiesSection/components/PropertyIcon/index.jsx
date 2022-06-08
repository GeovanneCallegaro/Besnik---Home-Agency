import * as C from './styles';
import BedsIcon from '../../../../assets/images/beds-icon.svg';
import BathIcon from '../../../../assets/images/bath-icon.svg';
import SquareIcon from '../../../../assets/images/sqtf-icon.svg';
import P from 'prop-types';

export const PropertyIcon = ({
  srcImage,
  price,
  address,
  numberBeds,
  numberBaths,
  numberSqft,
}) => {
  return (
    <C.Container>
      <C.ImageProperty src={srcImage} />
      <C.InfosPropertySection>
        <C.MasterInfos>
          <h4>${price}</h4>
          <p>{address}</p>
        </C.MasterInfos>
        <C.SecondaryInfos>
          <C.InfoContainer>
            <img src={BedsIcon} alt="icone de uma cama" />
            <p>{numberBeds} Beds</p>
          </C.InfoContainer>
          <C.InfoContainer>
            <img src={BathIcon} alt="icone de uma cama" />
            <p>{numberBaths} Baths</p>
          </C.InfoContainer>
          <C.InfoContainer>
            <img src={SquareIcon} alt="icone de uma cama" />
            <p>{numberSqft} Sqft</p>
          </C.InfoContainer>
        </C.SecondaryInfos>
      </C.InfosPropertySection>
    </C.Container>
  );
};

PropertyIcon.propTypes = {
  srcImage: P.string.isRequired,
  price: P.number.isRequired,
  address: P.string.isRequired,
  numberBeds: P.number.isRequired,
  numberBaths: P.number.isRequired,
  numberSqft: P.number.isRequired,
};
