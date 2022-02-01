const updateUser = (user) => {
  return ({
    type: 'UPDATE_USER',
    user: user
  });
};

export default updateUser;