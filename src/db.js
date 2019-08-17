/**
 * @module Database
 * @description Responsible for strapping up the database.
 * @since 0.1.0
 * @public
 */
import mongoose from 'mongoose';

const uri = process.env.DB_DATABASE || 'mongodb://localhost/forge';

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

mongoose.connect(uri, options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the database.')); // eslint-disable-line no-console
db.on('disconnected', console.error.bind(console, 'Failed connecting to the database.')); // eslint-disable-line no-console

export default db;
