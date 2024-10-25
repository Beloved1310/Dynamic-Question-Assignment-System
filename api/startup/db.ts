import mongoose from "mongoose";
import { config } from "../../config";
import { logger } from "../utilis/logger";

const { MONGODBURI } = config;

export const dbConnection = async () => {
  try {
    await mongoose.connect(MONGODBURI, {
      connectTimeoutMS: 10000, // 10 seconds
      socketTimeoutMS: 45000, // 45 seconds
    });
    logger.info("Connected to Database");
  } catch (error) {
    logger.error("Error connecting to Database:", error);
  }
};

declare module "mongoose" {
  interface ConnectOptions {}
}
