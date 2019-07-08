/**
 * @module Database
 * @description Responsible for strapping up the database.
 * @since 0.1.0
 * @public
 */
import mongoose from 'mongoose';

mongoose.connect(process.env.DB_DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the database.')); // eslint-disable-line no-console
db.on('disconnected', console.error.bind(console, 'Failed connecting to the database.')); // eslint-disable-line no-console

export default db;
