import app from './app';

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log('Server started: ', { // eslint-disable-line no-console
    NODE_ENV: process.env.NODE_ENV,
    DB_DATABASE: process.env.DB_DATABASE,
  });
});
