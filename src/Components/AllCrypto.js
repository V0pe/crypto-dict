import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AllCrypto({ coins }) {
  const url = '/';
  return (
    <section>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            <Link to={`${url}${coin.id}`}>
              <h4>{coin.name}</h4>
              <span>{coin.id}</span>
              <h5>
                PRICE
                <br />
                {' '}
                {coin.price}

              </h5>
            </Link>
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
