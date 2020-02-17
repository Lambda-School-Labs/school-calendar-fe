import { google } from "googleapis";
import nextConnect from "next-connect";
import middleware from "../../middleware";
import setCookie from "../../middleware/setCookie";
import listEvents from "../../services/google-calendar";

const handler = nextConnect();

handler.use(middleware);

handler.get((req, res) => {
  // check for valid session
  if (req.session.user) {
    // get oauth2 client
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: req.session.user.accessToken
    });

    // get calendar events by passing oauth2 client
    listEvents(oauth2Client, events => {
      console.log("events", events);

      const data = {
        name: req.session.user.name,
        photoUrl: req.session.user.displayPicture,
        googleId: req.session.user.googleId,
        email: req.session.user.email,
        events: events
      };
      res.json(data);
    });
  } else {
    res.redirect("/");
    // res.writeHead(302, { Location: "/" });
    // res.end();
  }
});

export default handler;
