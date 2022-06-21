import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Backbutton({ text }) {
  const history = useNavigate();
  const back = () => {
    history('/');
  };

  return (
    <div>
      <button type="button" className="logoButton" onClick={back}><h1>{text}</h1></button>
    </div>
  );
}

Backbutton.propTypes = ({
  text: PropTypes.string,
}).isRequired;

export default Backbutton;
