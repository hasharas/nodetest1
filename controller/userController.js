const User = require('../models/userModel');

//create user
exports.createUser = async (req, res, error) => {
      try {
            const user = await User.create(req.body);
            res.status(201).json({
                  message: "create",
                  data: user
            })
      } catch (err) {
            error(err);
      }
}

exports.getAllUsers = async (req, res, error) => {
      try {
            const users = await User.find();
            res.status(200).json({
                  message: "success",
                  datas: users
            });

      } catch (err) {
            error(err);
      }
}