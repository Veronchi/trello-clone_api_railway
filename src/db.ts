import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    dialect: "postgres",
    host: process.env.PGHOST,
    port: process.env.PGPORT,
  }
);

export default sequelize;