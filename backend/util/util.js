class Util {
  getSponcerId() {
    let result = "";
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz";
    let counter = 0;
    while (counter < 2) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      counter += 1;
    }
    return (
      result + Math.random().toString().split(".")[1].substr(0, 3)
    ).toUpperCase();
  }
  getPassword() {
    let result = "";
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz";
    let counter = 0;
    while (counter < 3) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      counter += 1;
    }
    return (
      result + Math.random().toString().split(".")[1].substr(0, 3)
    ).toUpperCase();
  }
  getVarifactionCode() {
    return Math.floor(1000 + Math.random() * 9000);
  }
  sendOTP(phoneNumber, OTP) {

    const twilio = require('twilio');
    const accountSid = 'ACb78b19059d4f7563041399b9199e6935';
    const authToken = '1bb88f6ac617c01255dd21ce5ab1e86e';
    const twilioPhoneNumber = '+14176093454';
    const client = twilio(accountSid, authToken);

    const message = `Your OTP code is: ${OTP}`;

    client.messages
      .create({
        body: message,
        from: twilioPhoneNumber,
        to: `+91${phoneNumber}`
      })
      .then(message => console.log(`OTP sent: ${message.sid}`))
      .catch(error => console.error(`Error sending OTP: ${error.message}`));


  }
}

module.exports = new Util();
