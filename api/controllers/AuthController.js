const passport = require('passport');
module.exports = {
login: function(req, res) {
    passport.authenticate('local', function(err, user, info){
      if((err) || (!user)) {
        return res.send({
          message: err.message,
          user
        });
      }
req.logIn(user, function(err) {
        if(err) res.send(err);
        return res.send({
          message: info.message,
          user
        });
      });
    })(req, res);
  },
logout: function(req, res) {
    req.logout();
    
  },
  register: function(req, res){
    var datos =req.allParams()
    
  }
};
//edwina@hotmail.com
//7896