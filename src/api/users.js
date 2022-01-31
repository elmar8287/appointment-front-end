import mainApi from './mainApi';

const authenticateUser = async (username) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const body = { name: username };
  const result = mainApi
    .post('v1/sessions', body, config)
    .then((response) => response.data);
  return result;
};

const registerUser = async (username) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const body = { name: username };
  const result = mainApi
    .post('api/v1/users', body, config)
    .then((response) => response.data);
  return result;
};

export default { authenticateUser, registerUser };
