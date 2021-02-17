import passport from "passport";
import LocalStrategy from "passport-local";

import User from "../user";

const options = {
  usernameField: "email",
  passwordField: 'password'
};

const localStrategy = new LocalStrategy({ options }, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });

    if (!user) throw new Error('User not found!');

    if (!user.verifyPassword(password)) throw new Error('Incorrect password');

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

passport.use(localStrategy);

const auth = passport.authenticate("local", {
  session: true,
  failureRedirect: "/login"
});

export default auth;

// export const jwt = {};
