import nextConnect from "next-connect";
import connectMongoDB from "./db";
import session from "./session";
import compat from "./compat";

const middleware = nextConnect();

middleware.use(compat);
middleware.use(connectMongoDB);
middleware.use(session);

export default middleware;
