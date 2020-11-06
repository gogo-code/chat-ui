import React from 'react';
import PropTypes from 'prop-types';
import StyledIcon from './style';

function Icon({
  
  ...rest
}) {
  return (
    <StyledIcon {...rest}>
      hello world
    </StyledIcon>
  );
}
 Icon.propTypes = {
  
};

export default Icon;
