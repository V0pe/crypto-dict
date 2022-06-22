import React from 'react';
import PropTypes from 'prop-types';

const FilterPrice = ({ value, handlePrice }) => (
  <div className="price-filter">
    {' Filter the Price of Coin: '}
    <input
      type="number"
      id="price-range"
      name="price-range"
      min="0"
      max="9999999999"
      value={value}
      onChange={handlePrice}
      placeholder="0"
    />
    {' USD($)'}
  </div>
);

FilterPrice.propTypes = ({
  value: PropTypes.number,
  handlePrice: PropTypes.func,
}).isRequired;

export default FilterPrice;
