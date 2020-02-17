import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

// google app config
const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirect: `${process.env.BASE_URL}/api/auth/success`
};

// scopes use for the application
const defaultScope = [
  "https://www.googleapis.com/auth/calendar.events.readonly",
  "profile",
  "email"
];

// oauth2 client
const createConnection = () =>
  new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );

// generate authentication url
const getConnectionUrl = auth =>
  auth.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: defaultScope
  });

// get auth url
const getAuthUrl = () => {
  const auth = createConnection();
  const url = getConnectionUrl(auth);
  return url;
};

// get oauth2 api
const getOAuth2 = auth => {
  return google.oauth2({
    auth: auth,
    version: "v2"
  });
};

const getAuthorizationCode = async (code, cb) => {
  const auth = createConnection();
  const { tokens } = await auth.getToken(code);
  auth.setCredentials(tokens);
  const user = await getOAuth2(auth);
  user.userinfo.get((err, res) => {
    if (err) {
      cb(err);
    } else {
      const userProfile = {
        googleId: res.data.id,
        accessToken: tokens.access_token,
        name: res.data.name,
        displayPicture: res.data.picture,
        email: res.data.email
      };
      cb(null, userProfile);
    }
  });
};

export { getAuthUrl, getAuthorizationCode };
