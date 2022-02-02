import ActionTypes from './types/action-types';

const initialState = { cars: [] };

export const addCar = (payload) => ({
  type: ActionTypes.ADD_CAR,
  payload,
});

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CAR: {
      const cars = [...state.cars, action.payload];
      return { ...state, cars };
    }
    case ActionTypes.RECEIVE_CARS: {
      const { cars } = action;
      return { cars };
    }
    default:
      return state;
  }
};

export default carsReducer;
