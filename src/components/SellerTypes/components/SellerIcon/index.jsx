import * as C from './styles';
import P from 'prop-types';
import { TextLinks } from '../../../TextLinks';

export const SellerIcon = ({ imgLink, text, textLink }) => {
  return (
    <C.Container>
      <img src={imgLink} alt="Imagem enviada" loading="lazy" />
      <h4>{text}</h4>
      <TextLinks text={textLink} />
    </C.Container>
  );
};

SellerIcon.propTypes = {
  imgLink: P.string.isRequired,
  text: P.string.isRequired,
  textLink: P.string.isRequired,
};
