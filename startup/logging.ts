import "express-async-errors";
import winston from "winston";
const { combine, timestamp, json, printf, colorize, simple } = winston.format;

const customFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${message} ${stack || ""}`;
});

const Logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: combine(timestamp({ format: "ddd MMM DD YYYY HH:mm:ss" }), customFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./logs/info.log",
    }),
  ],
});

export default Logger;
