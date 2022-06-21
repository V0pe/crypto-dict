import React from 'react';
import PropTypes from 'prop-types';
import Backbutton from './Backbutton';

function HeroArea({ logotext, title }) {
  return (
    <header>
      <Backbutton text={logotext} />
      <h1>{title}</h1>
    </header>
  );
}

HeroArea.propTypes = ({
  title: PropTypes.string,
  logotext: PropTypes.string,
}).isRequired;

export default HeroArea;
