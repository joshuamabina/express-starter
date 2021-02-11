import { Router } from "express";
import Africastalking from "africastalking";
import customId from "custom-id";

const router = Router();
const AT = Africastalking({
  apiKey: process.env.AT_API_KEY,
  username: process.env.AT_USERNAME,
});

router.post("/register", (req, res) => {
  // TODO extract name and age
  // from req.body.text line by line
  const lines = req.body.text.trim().split("\n");
  const responses = lines.map(line => customId({ name: line }));

  const sms = AT.SMS;

  const opts = {
    to: process.env.AT_PHONE_TO,
    from: process.env.AT_PHONE_FROM,
    message: responses.toString()
  };

  //Configure options for message sending
  sms
    .send(opts)
    .then(function (success) {
      res.send({ opts, sms, success });
    })
    .catch(function (error) {
      res.send({ opts, sms, error });
    });
});

export default router;
