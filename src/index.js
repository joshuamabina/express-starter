import app from './app';

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log({ // eslint-disable-line no-console
    NODE_ENV: process.env.NODE_ENV,
    DB_DATABASE: process.env.DB_DATABASE,

    APP_KEY: process.env.APP_KEY,
    APP_NAME: process.env.APP_NAME,

    JWT_SECRET: process.env.DB_DATABASE,
  });
});
