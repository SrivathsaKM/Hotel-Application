import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../api';

import { apiData } from './Actions/RoomsAction';

const ReduxHelper = () => {
  const dispatch = useDispatch();

  const formattedApiData = (items) => {
    const tempData = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => img.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempData;
  };

  useEffect(() => {
    let room = formattedApiData(api);
    dispatch(apiData(room));
  }, []);

  return <div></div>;
};

export default ReduxHelper;
