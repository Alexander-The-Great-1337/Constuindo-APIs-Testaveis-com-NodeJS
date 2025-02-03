import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017";

const connect = async () => {
  try {
    await mongoose.connect(mongodbUrl);
    console.info("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const close = mongoose.connection.close();

export default {
  connect,
  close
};