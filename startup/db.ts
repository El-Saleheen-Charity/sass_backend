import winston from "winston";
import { Client } from "pg";
import config from "config";
import Logger from "./logging";

const client = new Client({
  host: config.get("dbhost"),
  database: config.get("dbname"),
  user: config.get("dbuser"),
  password: config.get("dbpass"),
  port: config.get("dbport"),
});

async function connect() {
  try {
    await client.connect();
    Logger.info("Connected to PostgreSQL database");
  } catch (error) {
    Logger.error("Error connecting to PostgreSQL database:", error);
  }
}

async function executeQuery(query: string) {
  try {
    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    Logger.error("Error executing query:", error);
    throw error;
  }
}

export { connect, executeQuery };
