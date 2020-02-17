import nextConnect from "next-connect";
import middleware from "../../../middleware";
import setCookie from "../../../middleware/setCookie";

const handler = nextConnect();

handler.use(middleware);
handler.use(setCookie);

handler.get((req, res) => {
  res.redirect("/redirect");
  // res.writeHead(302, { Location: "/redirect" });
  // res.end();
});

export default handler;
