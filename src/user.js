import mongoose, { Schema } from "mongoose";
import validator from "validator";
import uniqueValidator from "mongoose-unique-validator";
import { hashSync, compareSync } from "bcrypt";

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

UserSchema.methods._hashPassword = function (password, saltRounds = 10) {
  return hashSync(password, saltRounds);
};

UserSchema.methods.verifyPassword = function (password) {
  return compareSync(password, this.password);
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

UserSchema.plugin(uniqueValidator, { message: "{VALUE} already taken!" });

export default mongoose.model("User", UserSchema);
