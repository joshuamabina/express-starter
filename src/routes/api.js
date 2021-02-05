import { Router } from 'express';
import Africastalking from 'africastalking';
import customId from 'custom-id'

const router = Router();
const AT = Africastalking({
  apiKey: 'cbe49b692bacebcd1e96085eac4098f9e8fea7e0438b5d650de88fd8b1b32b6b',
  username: 'sandbox',
});

router.post("/register", (req, res) => {
  // TODO extract name and age
  // from req.body.text line by line

  const lines = req.body.text.trim().split('\n');
  const responses = lines.map(line => customId({ name: line }));

  const sms = AT.SMS;

  const opts = {
    to: '+255783787166',
    from: '18369',
    message: responses.toString(),
  };

  //Configure options for message sending
  sms.send(opts)
    .then(function(success) {
      console.log(success);
      res.send({ opts, sms, success });
    })
    .catch(function(error) {
      console.log(error);
      res.send({ opts, sms, error });
    });
});

export default router;
