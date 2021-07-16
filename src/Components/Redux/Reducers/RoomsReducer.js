const initialStateValue = [];
const RoomsReducer = (state = initialStateValue, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case 'SAMPLE':
      return [...action.payload];
    default:
      return [...state];
  }
};

export default RoomsReducer;
