import nodemailer from "nodemailer";

const MailService = async (name, phone, email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "thefoodiebeecontact@gmail.com",
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: "thefoodiebeecontact@gmail.com",
      to: "shreeramshanmugasundaram1@gmail.com,manul@thefoodiebee.com",
      subject: name,
      text: `Name : ${name} Phone : ${phone} Email : ${email}`,
      headers: {
        "X-Laziness-level": 1000,
      },
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        // return res.status(500).send("Server error");
      } else {
        console.log(`Email sent: ${info.response}`);
        // return res.status(200).send("mail successfully sent");
      }
    });
  } catch (err) {
    console.log("Something went wrong while sending mail");
  }
};

export { MailService };
