import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Hero from './../Hero';
import Banner from './../Banner';

const SingleRoom = (props) => {
  //console.log(props);
  const roomId = props.match.params.id;
  console.log(roomId);
  // console.log(id);
  const rooms = useSelector((state) => {
    //console.log(state);
    return state.rooms.find((room) => room.slug === roomId);
  });
  console.log(rooms);

  const [mainImg, ...remainingImg] = rooms.images;

  //console.log(remainingImg);
  return (
    <>
      {!rooms ? (
        <div className='error'>
          <h3>No such room could be found...</h3>
          <Link to='/rooms' className='btn-primary'>
            back To Rooms
          </Link>
        </div>
      ) : (
        <Hero hero='roomsHero'>
          <Banner title={`${rooms.name} room`}>
            <Link to='/rooms' className='btn-primary'>
              back To Rooms
            </Link>
          </Banner>
        </Hero>
      )}
      <section className='single-room'>
        <div className='single-room-images'>
          {remainingImg.map((img, idx) => {
            return <img src={img} key={idx} />;
          })}
          <div className='single-room-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{rooms.description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>cost : ${rooms.price}</h6>
              <h6>Size : {rooms.size} SQFT</h6>
              <h6>Capacity : {rooms.capacity > 1 ? `${rooms.capacity} people` : `${rooms.capacity} person`}</h6>
              <h6>Pets: {rooms.pets ? 'allowed' : 'not-allowed'}</h6>
              <h6>Breakfast : {rooms.breakfast ? 'free breakfast included' : 'No free breakfast'}</h6>
            </article>
          </div>
        </div>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {rooms.extras.map((extra, idx) => {
              return <li key={idx}>- {extra}</li>;
            })}
          </ul>
        </section>
      </section>
    </>
  );
};

export default SingleRoom;
