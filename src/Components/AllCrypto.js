import React from 'react';
import PropTypes from 'prop-types';

function AllCrypto({ coins }) {
  return (
    <section>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            <h4>{coin.name}</h4>
            <span>{coin.id}</span>
            <h5>{coin.price}</h5>
          </li>
        ))}
      </ul>
    </section>
  );
}

AllCrypto.propTypes = ({
  coins: PropTypes.string,
}).isRequired;

export default AllCrypto;
