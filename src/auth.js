import passport from 'passport';
import LocalStrategy from 'passport-local';

import User from './user';

const localOpts = {
  usernameField: 'email',
};

const localStrategy = new LocalStrategy(
  localOpts,
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false);
      } else if (!user.authenticateUser(password)) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  },
);

passport.use(localStrategy);

const auth = passport.authenticate('local', {
  session: true,
  successRedirect: '/',
  failureRedirect: '/login',
});

export default auth;
