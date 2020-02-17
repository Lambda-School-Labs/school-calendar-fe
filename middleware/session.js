import session from "next-session";
import connectMongo from "connect-mongo";
import nextConnect from "next-connect";
import connectDatabase, { db } from "./db";

const handler = nextConnect();

handler.use(connectDatabase);

const MongoStore = connectMongo(session);

handler.use((req, res, next) =>
  session({
    storePromisify: true,
    store: new MongoStore({ mongooseConnection: db })
  })(req, res, next)
);

export default handler;
