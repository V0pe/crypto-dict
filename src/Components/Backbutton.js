import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../Assets/cryptocurrencies.png';

function Backbutton({ text }) {
  const history = useNavigate();
  const back = () => {
    history('/');
  };

  return (
    <div>
      <button type="button" className="logoButton" onClick={back}>
        <h1>
          <img src={logo} className="app-logo" alt="logo" />
          {text}
        </h1>
      </button>
    </div>
  );
}

Backbutton.propTypes = ({
  text: PropTypes.string,
}).isRequired;

export default Backbutton;
