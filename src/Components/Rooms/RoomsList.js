import React from 'react';
import Room from './../Room';

const RoomsList = (props) => {
  const { rooms } = props;
  if (rooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no rooms matched your parameter</h3>
      </div>
    );
  }
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map((room, idx) => {
          return <Room {...room} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
