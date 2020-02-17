import mongoose from "mongoose";
import nextConnect from "next-connect";

export const db = mongoose.connection;

export const disconnect = async () => await mongoose.connection.close();

const database = async (req, res, next) => {
  db.on("error", err => {
    log.error("Error in mongodb connection:", err);
  });
  try {
    if (db.readyState !== 1) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });
      console.log(`MongoDB Connected`);
    }
  } catch (err) {
    console.log("Error to connecting to database", err);
    process.exit();
  }
  next();
};

const middleware = nextConnect();
middleware.use(database);

export default middleware;
