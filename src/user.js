import mongoose, { Schema } from "mongoose";
// import irina from "irina";
import validator from "validator";
import { genSaltSync, hashSync, compareSync } from "bcrypt";
// import uniqueValidator from "mongoose-unique-validator";

// import { passwordReg } from './user.validations';
// import constants from '../../config/constants';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required!"],
      trim: true,
      validate: {
        validator(email) {
          return validator.isEmail(email);
        },
        message: "{VALUE} is not a valid email!"
      }
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      trim: true,
      minlength: [6, "Password need to be longer!"]
    }
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
  }

  return next();
});

UserSchema.methods._genSalt = function (rounds = 10) {
  return genSaltSync(rounds);
};

UserSchema.methods._hashPassword = function (password) {
  return hashSync(password, this._genSalt());
};

UserSchema.methods.verifyPassword = function (password) {
  return compareSync(this._hashPassword(password), this.password);
};

UserSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    email: this.email
  };
};

UserSchema.methods.toJSON = function () {
  return {
    _id: this._id,
    name: this.name,
    email: this.email
  };
};

// UserSchema.plugin(irina);

// UserSchema.plugin(uniqueValidator, {
//   message: "{VALUE} already taken!"
// });

export default mongoose.model("User", UserSchema);
