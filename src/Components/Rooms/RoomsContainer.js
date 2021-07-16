import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

const RoomsContainer = () => {
  const [type, setType] = useState('all');
  const [capacity, setCapacity] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const rooms = useSelector((state) => {
    return state.rooms;
  });

  const maxPrice = Math.max(...rooms.map((room) => room.price));
  //console.log(maxPrice);
  const maxSize = Math.max(...rooms.map((room) => room.size));
  //console.log(maxSize);

  const uniqueItems = (rooms, value) => {
    return [...new Set(rooms.map((item) => item[value]))];
  };

  //type option
  let types = uniqueItems(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, idx) => {
    return (
      <option value={item} key={idx}>
        {item}
      </option>
    );
  });

  //capacity option
  let people = uniqueItems(rooms, 'capacity');
  people = people.map((item, idx) => {
    return (
      <option value={item} key={idx}>
        {item}
      </option>
    );
  });

  const handleSelectChange = (result) => {
    setType(result);
  };

  const handleSelectChangeCapacity = (result) => {
    //console.log(result);
    setCapacity(result);
  };

  //Search Functionality
  //room types
  useEffect(() => {
    const data = rooms.filter((room) => {
      return room.name.toLowerCase().includes(type.toLowerCase());
    });

    if (data.length === 0) {
      setFilteredData(rooms);
    } else {
      setFilteredData(data);
    }
  }, [rooms, type]);

  //guests capacity
  useEffect(() => {
    if (capacity != 1) {
      const data = rooms.filter((room) => {
        return room.capacity == capacity;
      });
      setFilteredData(data);
    }
  }, [rooms, capacity]);

  return (
    <>
      <RoomsFilter maxPrice={maxPrice} maxSize={maxSize} types={types} type={type} handleSelectChange={handleSelectChange} people={people} handleSelectChangeCapacity={handleSelectChangeCapacity} capacity={capacity} />
      <RoomsList rooms={filteredData} />
    </>
  );
};

export default RoomsContainer;
