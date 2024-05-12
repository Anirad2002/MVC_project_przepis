const User = require('../models/User');
const bcrypt = require('bcryptjs');

const userController = {
  getUserProfile: async (req, res) => {
    try {
      if (!req.session.user) {
        return res.redirect('../auth/login');
      }
      const userId = req.session.user._id;
      const user = await User.findById(userId);
      res.render('users/profile', { user });
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  },

  editUserProfile: async (req, res) => {
    try {
      if (!req.session.user) {
        return res.redirect('../auth/login');
      }
      const userId = req.session.user._id;
      const { name, email } = req.body;
      const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
      res.redirect('/users/profile');
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  }
};

module.exports = userController;
