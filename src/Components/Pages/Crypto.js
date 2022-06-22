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

  const coin = useSelector(selectDetails);

  return (
    <section>
      <LogoArea logotext="Crypto" title={coin[0].name} />
      <div className="detail-container">
        <h2>Date</h2>
        <p>
          Source:
          {' '}
          { coin[0].source }
        </p>
        <p>
          Name:
          {' '}
          { coin[0].name }
        </p>
        <p>
          shortform:
          {' '}
          { coin[0].id }
        </p>
        <p>
          Price:
          {' '}
          { coin[0].price }
        </p>
        <p>
          Volume daily:
          {' '}
          { coin[0].volume_a }
        </p>
        <p>
          Volume Hourly:
          {' '}
          { coin[0].volume_b }
        </p>
        <p>
          Volume monthly:
          {' '}
          { coin[0].volume_c }
        </p>
      </div>
    </section>
  );
}

export default Crypto;
