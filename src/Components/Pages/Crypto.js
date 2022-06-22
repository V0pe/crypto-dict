import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LogoArea from '../HeroArea';
import { FetchDetails, selectDetails } from '../../Redux/Detail';

function Crypto() {
  const url = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchDetails(url));
  }, [dispatch]);

  const coins = useSelector(selectDetails);

  return (
    <div>
      {coins.map((coin) => (
        <section key={coin.id}>
          <LogoArea logotext="Crypto" title={coin.name} />
          <div className="detail-container">
            <h2>Cryptocurrency Market Analysis</h2>
            <p>
              Source:
              {' '}
              { coin.source }
            </p>
            <p>
              Name:
              {' '}
              { coin.name }
            </p>
            <p>
              shortform:
              {' '}
              { coin.id }
            </p>
            <p>
              Price:
              {' '}
              { coin.price.toFixed(2) }
            </p>
            <p>
              Volume daily:
              {' '}
              { coin.volume_a.toFixed(2) }
            </p>
            <p>
              Volume Hourly:
              {' '}
              { coin.volume_b.toFixed(2) }
            </p>
            <p>
              Volume monthly:
              {' '}
              { coin.volume_c.toFixed(2)}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Crypto;
