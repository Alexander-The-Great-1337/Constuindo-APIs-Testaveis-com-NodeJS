import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017";

const connect = async () => {
  mongoose.connect(mongodbUrl);
}

const close = mongoose.connection.close();

export default {
  connect,
  close
};