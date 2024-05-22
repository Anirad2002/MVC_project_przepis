const User = require('../models/User');

const authController = {
  getRegisterForm: (req, res) => {
    res.render('auth/register');
  },

  registerUser: async (req, res) => {
    try {
      const { email, name, password } = req.body;
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send('Użytkownik o tym adresie e-mail już istnieje');
      }
      const newUser = new User({ email, name, password });
      await newUser.save();
      res.redirect('login');
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  },

  getLoginForm: (req, res) => {
    res.render('auth/login');
  },

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ error: 'Użytkownik o tym adresie e-mail nie istnieje.' });
      }
  
      const isPasswordValid = password === user.password;
  
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Nieprawidłowe hasło.' });
      }
  
      req.session.isAuthenticated = true;
      req.session.user = {
        _id: user._id,
        email: user.email,
        name: user.name
      };
  
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Błąd serwera.' });
    }
  },

  logoutUser: (req, res) => {
    req.session.isAuthenticated = false;
    req.session.destroy();
    res.redirect('/');
  }
};

module.exports = authController;
