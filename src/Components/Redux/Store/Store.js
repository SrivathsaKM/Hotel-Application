import { createStore, combineReducers } from 'redux';
import RoomsReducer from '../Reducers/RoomsReducer';

const ConfigureStore = () => {
  const rootReducer = combineReducers({
    rooms: RoomsReducer,
  });
  const store = createStore(rootReducer);
  return store;
};

export default ConfigureStore;
