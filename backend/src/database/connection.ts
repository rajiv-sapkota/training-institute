import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize(
  process.env.DB_NAME!, // database
  process.env.DB_USERNAME!, // user
  process.env.DB_PASSWORD!, // password
  {
    host: process.env.DB_HOST!,
    dialect: "postgres",
    port: Number(process.env.DB_PORT!),
    logging: false, // disable SQL logs (optional)
    models: [__dirname + '/models']

  }
);

export const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

sequelize.sync({ alter: true}).then(() => {
  console.log("database and tables synced !!!");
});

export default sequelize;
