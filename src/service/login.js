const jwt = require('jsonwebtoken');

module.exports = {
    login: (req, res) => {
        const user = {
            username: 'usermock',
            password: 'passwordmock'
          }
        
          jwt.sign({user}, 'secretkeyasdwa88saa', { expiresIn: '24h' }, (err, token) => {
            res.json({
              token,
              expired: 24
            });
          });
    }
}