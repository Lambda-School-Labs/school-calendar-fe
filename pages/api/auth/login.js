import nextConnect from "next-connect";
import middleware from "../../../middleware";
import { getAuthUrl } from "../../../utils/google-util";

const handler = nextConnect();

handler.use(middleware);

handler.get((req, res) => {
  res.redirect(getAuthUrl());
  // res.writeHead(302, { Location: getAuthUrl });
  // res.end();
});

export default handler;
