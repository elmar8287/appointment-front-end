import mainApi from './mainApi';

const fetchCars = async () => mainApi.get('v1/users/{user_id}/cars').then((res) => {
  let cars = [];
  if (res.status === 200) {
    cars = res.data;
  }
  return cars;
});

const removeCar = async (userId, carId) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorisation: token,
    },
  };
  mainApi
    .delete(`v1/users/${userId}/cars/${carId}`, config)
    .then((response) => response);
};

const addCar = async (car) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorisation: token,
    },
  };
  const body = car;
  const result = mainApi
    .post(`v1/users/${car.get('user_id')}/cars`, body, config)
    .then((response) => response.data);
  return result;
};

export default { fetchCars, addCar, removeCar };
