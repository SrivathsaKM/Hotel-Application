import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../Hero';
import Banner from '../Banner';

const ErrorRoom = () => {
  return (
    <>
      <Hero hero='defaultHero'>
        <Banner title='404 Error! Page Not Found'>
          <Link className='btn-primary' to='/'>
            Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default ErrorRoom;
