import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME!, // database
  process.env.DB_USERNAME!, // user
  process.env.DB_PASSWORD!, // password
  {
    host: process.env.DB_HOST!,
    dialect: "postgres",
    port: Number(process.env.DB_PORT!),
    logging: false, // disable SQL logs (optional)
    schema: "training-institute",
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

export default sequelize;
