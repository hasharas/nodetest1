const User = require('../models/userModel');

//create user
exports.createUser = async (req, res, next) => {
      try {
            const user = await User.create(req.body);
            res.status(201).json({
                  message: "create",
                  data: user
            })
      } catch (err) {
            next(err);
      }
}

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


exports.getUserById = async (req, res, next) => {
      try {
            const user = await User.findById(req.params.id);
            if (!user) return res.status(404).json({ message: 'user not found' });
            res.json(user);
      } catch (err) {
            next(err);
      }
}

exports.updateUserById = async (req, res, next) => {
      try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) return res.status(404).json({ message: "user not found" });
            res.json(user);
      } catch (err) {
            next(err);
      }
}

exports.deleteUserById = async (req, res, next) => {
      try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) return res.ststus(404).json({ message: 'user not found' });
            res.json({
                  message: "user delete..",
                  data: user
            });
      } catch (err) {
            next(err)
      }
}