import mongoose from "mongoose";
import { config } from "./config";

export default () => {
  const connect = async () => {
    try {
      await mongoose.connect(config.DATABASE_URL!);
      console.log("Successfully connected to database");
    } catch (error) {
      console.log("Error connecting to database", error);
      return process.exit(1);
    }
  };

  connect();

  mongoose.connection.on("disconnected", connect);
};
