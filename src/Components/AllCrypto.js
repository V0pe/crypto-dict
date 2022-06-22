import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AllCrypto({ coins }) {
  const url = '/';
  return (
    <section>
      <ul className="coin-container">
        {coins.map((coin) => (
          <li key={coin.id} className="coin">
            <Link to={`${url}${coin.id}`}>
              <h4>{coin.name}</h4>
              <span>{coin.id}</span>
              <h5>
                PRICE:
                {' '}
                $
                {coin.price.toFixed(4)}

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
