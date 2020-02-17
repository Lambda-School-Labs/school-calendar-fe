import nextConnect from "next-connect";
import { getAuthorizationCode } from "../utils/google-util";

const handler = nextConnect();

handler.use(async (req, res, next) => {
  console.log("req.query.code", req.query.code);
  await getAuthorizationCode(req.query.code, (err, res) => {
    if (err) {
      res.writeHead(status || 302, { Location: "/" });
      res.end();
    } else {
      console.log("req from session middleware", res);
      req.session.user = res;
      console.log("req.user from session middleware", req.session.user);
      next();
    }
  });
});

export default handler;
