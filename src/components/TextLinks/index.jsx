import * as C from './styles';
import P from 'prop-types';
import ArrowLeft from '../../assets/images/arrow-left.svg';

export const TextLinks = ({ text }) => {
  return (
    <C.Container>
      <p>{text}</p>
      <img src={ArrowLeft} alt="seta" />
    </C.Container>
  );
};

TextLinks.propTypes = {
  text: P.string.isRequired,
};
