// controllers/UserController.js

import User from "../models/User.mjs";

// Example controller methods
const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  createUser: async (req, res) => {
    const { username, email } = req.body;
    try {
      const newUser = new User({ username, email });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

module.exports = UserController;
