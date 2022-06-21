import React, { useState } from 'react';
import LogoArea from '../HeroArea';
import FilterPrice from '../FilterInput';

function Homepage() {
  const [InputPrice, SetPriceInput] = useState(30);
  const Pricechangehandler = ({ target }) => {
    SetPriceInput(target.value);
  };

  return (
    <section>
      <LogoArea logotext="Crypto" title="Major Crypto Markets" />
      <FilterPrice value={InputPrice} handlePrice={Pricechangehandler} />
    </section>
  );
}

export default Homepage;
