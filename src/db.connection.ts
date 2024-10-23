import { config } from "dotenv";
config();

const CONNECTION = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USER,
  database: process.env.DB_DATABASE,
}

export default CONNECTION;