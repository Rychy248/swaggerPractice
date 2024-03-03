// controllers/UserController.js

import User from "../models/User.mjs";

// Example controller methods
const userController = {
  async get (req, res){

    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }

  },

  async post(req,res){
    const {id, username, email } = req.body;
    
    try {
      const newUser = await User.createUser({ id, username, email });
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    };
    
  }

};

export default userController;
