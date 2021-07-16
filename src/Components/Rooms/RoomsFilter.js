import React, { useState } from 'react';

const RoomsFilter = (props) => {
  const { maxPrice, maxSizem, types, type, handleSelectChange, people, handleSelectChangeCapacity, capacity } = props;

  const handleChange = (e) => {
    const result = e.target.value;
    handleSelectChange(result);
  };

  const handleChangeCapacity = (e) => {
    const result = e.target.value;
    handleSelectChangeCapacity(result);
  };

  return (
    <section className='filter-container'>
      <div className='section-title'>
        <h4>Serach Rooms</h4>
        <div />
      </div>
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* capacity */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChangeCapacity}>
            {people}
          </select>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
