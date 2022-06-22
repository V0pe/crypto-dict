import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LogoArea from '../HeroArea';
import FilterPrice from '../FilterInput';
import AllCrypto from '../AllCrypto';
import { selectCryptos } from '../../Redux/AllCrypto';

function Homepage() {
  const [InputPrice, SetPriceInput] = useState(30);
  const Pricechangehandler = ({ target }) => {
    SetPriceInput(target.value);
  };
  const cryptos = useSelector(selectCryptos);
  const cryptosList = cryptos.filter((coin) => InputPrice < coin.price);

  return (
    <section>
      <LogoArea logotext="Crypto" title="Major Crypto Markets" />
      <FilterPrice value={InputPrice} handlePrice={Pricechangehandler} />
      <AllCrypto coins={cryptosList} />
    </section>
  );
}

export default Homepage;
