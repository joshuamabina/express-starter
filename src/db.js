import pgp from 'pg-promise';

const db = pgp(process.env.DB_DATABASE);

export default db;
