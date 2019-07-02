import mongoose from 'mongoose';

const uri = process.env.DB_DATABASE;
const options = {
  useNewUrlParser: true,
}

mongoose.connect(uri, options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error:')); // eslint-disable-line no-console
db.on('disconnected', console.error.bind(console, 'Database disconnected:')); //eslint-disable-line no-console

export default db;
