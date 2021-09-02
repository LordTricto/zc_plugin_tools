require("express-async-errors");
const express = require("express");
const { google } = require("googleapis");
const {} = require("googleapis");
const app = express();

const env = require("./src/config/env");
const logger = require("./src/config/logger");

// require("./src/config/db")();
require("./src/config/routing")(app);

const PORT = env.PORT;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

//Query the API and get the list of files

async function getFilesList() {
  try {
    const response = await drive.files.list();
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

getFilesList();

app.listen(PORT, () => {
  logger.info(`app listening at port 3600 in ${env.NODE_ENV} mode`);
});
