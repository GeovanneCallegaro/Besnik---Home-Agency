import * as C from './styles';
import P from 'prop-types';

export const Button = ({ children, background }) => {
  return <C.Button background={background}>{children}</C.Button>;
};

Button.propTypes = {
  children: P.string.isRequired,
  background: P.bool.isRequired,
};
