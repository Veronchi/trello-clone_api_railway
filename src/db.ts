import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "railway",
  "postgres",
  "rnkJHAhK6zgoK0RupThS",
  {
    dialect: "postgres",
    host: "containers-us-west-183.railway.app",
    port: 7935,
  }
);

export default sequelize;