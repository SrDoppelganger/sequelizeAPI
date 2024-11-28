import { Sequelize, sequelize } from 'sequelize';

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;

const sequelize = new Sequelize(dbName, dbUser, dbHost, dbPassword, dbPort, {
  dialect: 'mysql',
  host: dbHost,
  port: dbPort
});

export default sequelize;