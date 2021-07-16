import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../Loading';
import Room from '../Room';

const FeatureRooms = () => {
  const rooms = useSelector((state) => {
    return state.rooms.flat().filter((room) => room.featured === true);
  });

  return (
    <section className='featured-rooms'>
      <div className='section-title'>
        <h4>Featured Rooms</h4>
        <div />
      </div>
      <div className='featured-rooms-center'>
        {rooms.length > 0 ? (
          rooms.map((ele, idx) => {
            // console.log(ele.images[0]);
            return <Room {...ele} key={idx} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default FeatureRooms;
