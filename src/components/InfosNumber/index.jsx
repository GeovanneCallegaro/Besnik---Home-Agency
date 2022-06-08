import * as C from './styles';
import P from 'prop-types';

export const InfosNumber = ({ number, description }) => {
  return (
    <C.InfoContent>
      <h4>{number}</h4>
      <p>{description}</p>
    </C.InfoContent>
  );
};

InfosNumber.propTypes = {
  number: P.string.isRequired,
  description: P.string.isRequired,
};
