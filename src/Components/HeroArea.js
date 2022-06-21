import React from 'react';
import PropTypes from 'prop-types';
import Backbutton from './Backbutton';

function LogoArea({ logotext, title }) {
  return (
    <header>
      <Backbutton text={logotext} />
      <h1>{title}</h1>
    </header>
  );
}

LogoArea.propTypes = ({
  title: PropTypes.string,
  logotext: PropTypes.string,
}).isRequired;

export default LogoArea;
