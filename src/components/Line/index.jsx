import * as C from './styles';
import P from 'prop-types';

export const Line = ({ width }) => {
  return <C.Container width={width}></C.Container>;
};

Line.propTypes = {
  width: P.string.isRequired,
};
