import mongoose from "mongoose";
import config from "config";

const mongodbUrl = config.get('database.mongoUrl');

const connect = async () => {
  try {
    await mongoose.connect(mongodbUrl);
    console.info("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default {
  connect,
  connection: mongoose.connection
};