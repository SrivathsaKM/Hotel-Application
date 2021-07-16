import React from 'react';
import { Link } from 'react-router-dom';

import Hero from './Components/Hero';
import Banner from './Components/Banner';
import Services from './Components/Services';
import ReduxHelper from './Components/Redux/ReduxHelper';
import FeatureRooms from './Components/Rooms/FeatureRooms';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title='Spend Your Dream Holidays'
          subtitle='Book a room at our resort now and get a discount of 30%. Fruit basket, soft drinks and a huge cozy bed are waiting for you. 
        We will do everything to make you feel at home.'>
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <ReduxHelper />
      <FeatureRooms />
    </>
  );
};

export default Home;
