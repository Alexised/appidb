const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt = require('bcrypt-nodejs');
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});
passport.deserializeUser(function(id, cb){
  Player.findOne({id}, function(err, user) {
    cb(err, users);
  });
});
passport.use(new LocalStrategy({
  EmailField: 'Email',
  passportField: 'password'
}, function(email, password, cb){
Player.findOne({Email: email}, function(err, user){
  console.log(`Resultado de consulta: ${email}, ${user}`)
    if(err) return cb(err);
    if(!user) return cb(null, false, {message: 'Username not found'});
bcrypt.compare(password, user.password, function(err, res){
      if(!res) return cb(null, false, { message: 'Invalid Password' });
let userDetails = {
        email: user.email,
        Email: user.Email,
        id: user.id
      };
return cb(null, userDetails, { message: 'Login Succesful'});
    });
  });
}));