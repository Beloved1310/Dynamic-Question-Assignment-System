import winston from "winston";
const { combine, timestamp, json, prettyPrint, errors } = winston.format;
export const logger = winston.createLogger({
  level: "info",
  format: combine(errors({ stack: true }), timestamp(), json(), prettyPrint()),

  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log", level: "error" }),
  ],
});
