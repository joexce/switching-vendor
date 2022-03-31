const jwt = require('jsonwebtoken');

function login(req, res) {
  
  const user = {
    username: "usermock",
    password: 'passwordmock'
  }

  return jwt.sign({user}, 'secretkeyasdwa88saa', { expiresIn: '24h' }, (err, token) => {
    res.json({
      token,
      expired: 24
    });
  });
}

module.exports = {
  login: (req, res) => login(req, res)
}