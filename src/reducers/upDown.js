
const initialState = 0;
// define the reducer function
const changeTheNumber = (state = initialState, action) => {
  switch(action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
}

export default changeTheNumber;