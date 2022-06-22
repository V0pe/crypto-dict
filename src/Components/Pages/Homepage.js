import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useMatch } from 'react-router-dom';
import LogoArea from '../HeroArea';
import FilterPrice from '../FilterInput';
import AllCrypto from '../AllCrypto';
import { selectCryptos } from '../../Redux/AllCrypto';

function Homepage() {
//   const { url } = useMatch();
  const [InputPrice, SetPriceInput] = useState(30);
  const Pricechangehandler = ({ target }) => {
    SetPriceInput(target.value);
  };
  const cryptos = useSelector(selectCryptos);

  return (
    <section>
      <LogoArea logotext="Crypto" title="Major Crypto Markets" />
      <FilterPrice value={InputPrice} handlePrice={Pricechangehandler} />
      <AllCrypto coins={cryptos} />
    </section>
  );
}

export default Homepage;
