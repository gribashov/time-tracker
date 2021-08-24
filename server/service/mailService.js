const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Verify your account " + process.env.API_URL,
      text: "",
      html: `<div style="font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif; color: #121314; padding: 5vh 10vw; -webkit-font-smoothing: antialiased;">
          <h1>Hello.</h1>
      <p style="font-weight: 500; font-size: 2.2em">Welcome to RnDx2 Time Manager</p>
      <p style="font-size: 1.6em;
      font-weight: 300;
      line-height: 1.4;
      max-width: 28em;">Congratulations! You're almost set to start using RnDx2 Time Manager.
        Just click the button below to validate your email address.</p>
        <a href="${link}" style="background-color: #7952B3; font-size: 18px; font-family: Helvetica, Arial, sans-serif; font-weight: bold; text-decoration: none; padding: 14px 20px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">
          <span style="mso-text-raise: 15pt;">Sign in to Validate your Email Address &rarr;</span>
        </a>
        <p>If the button does not work for any reason, you can also paste the following into your browser:</p>
        <div>${link}</div>
      </div>`,
    });
  }
}

module.exports = new MailService();
