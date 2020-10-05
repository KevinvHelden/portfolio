import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import config from "./mailConfig";

const RECEIVER_EMAIL = "hello.kevinvanhelden@gmail.com";
const SENDER_EMAIL = '"Portfolio - message box" <k.v.helden96@hotmail.com>';

function getParams(url: string) {
  const _paramString: string = url.split("?")[1];
  const _paramArray: Array<string> = _paramString.split("&");

  let params: { [key: string]: string } = {};

  _paramArray.forEach((param) => {
    const [key, val] = param.split("=");
    params[key] = decodeURI(val);
  });

  return params;
}

export const sendMail = functions
  .region("europe-west2")
  .https.onRequest((req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    const { name, email, text } = getParams(req.url);

    let transporter = nodemailer.createTransport(config);

    const message = {
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      subject: `${name} -- ${email}`,
      text,
    };

    transporter.sendMail(message);

    res.send(true);
  });