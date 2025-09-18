import mongoose from "mongoose";

export default () => {
  const connect = async () => {
    try {
      await mongoose.connect(
        "mongodb://localhost:27017/social-media-app-backend"
      );
      console.log("Successfully connected to database");
    } catch (error) {
      console.log("Error connecting to database", error);
      return process.exit(1);
    }
  };

  connect();

  mongoose.connection.on("disconnected", connect);
};
