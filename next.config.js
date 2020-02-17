const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_SCOPE:
      "email profile https://www.googleapis.com/auth/calendar.events",
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    BASE_URL: process.env.BASE_URL,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET
  }
};
