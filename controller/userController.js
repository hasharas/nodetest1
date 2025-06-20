const User = require('../models/userModel');

//create user

exports.createUser = async (req, res, next) => {
      try {
            const user = await User.create(req.body);
            res.status(201).json(user);

      } catch (error) {
            next(error);
      }
};

exports.getAllUsers = async (req, res, next) => {
      try {
            const users = await User.find();
            res.status(200).json({
                  message: "success",
                  datas: users
            });

      } catch (err) {
            next(err);
      }
}