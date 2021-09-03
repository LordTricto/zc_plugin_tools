const response = require("../utils/response");
const env = require("../config/env");
const { google } = require("googleapis");

const {
  GOOGLE_DRIVE_KEYS: { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN },
} = env;

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
console.log(REDIRECT_URI);
async function getFilesList(req, res) {
  console.log(REDIRECT_URI);
  try {
    const r = await drive.files.list();
    const { data } = r;

    res.send(response("List Of Files", data));
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
}

module.exports = { getFilesList };
