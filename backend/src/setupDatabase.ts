import mongoose from "mongoose";
import { config } from "@root/config";
import Logger from "bunyan";

const log: Logger = config.createLogger("setupDatabase");

export default () => {
  const connect = async () => {
    try {
      await mongoose.connect(config.DATABASE_URL!);
      log.info("Successfully connected to database");
    } catch (error) {
      log.error("Error connecting to database", error);
      return process.exit(1);
    }
  };

  connect();

  mongoose.connection.on("disconnected", connect);
};
