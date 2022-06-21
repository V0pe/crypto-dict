import React from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types'

function Backbutton({ text }) {
  const history = useHistory();
  const back = () => {
    history.push('/');
  };

  return (
    <div>
      <button type="button" className="logoButton" onClick={back}>{text}</button>
    </div>
  );
}

export default Backbutton;
