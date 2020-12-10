import User from '../models/User';

export const index = async (req, res) => {
  const data = await User.findAll({});
  res.send({ name: 'User Route', data });
};
