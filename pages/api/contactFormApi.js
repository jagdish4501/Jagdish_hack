import { createTransport } from 'nodemailer';

const contactFormApi = async (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
    <p>New message from Contact Form in <a href='https://www.thecodehelp.in/contact'>CodeHelp Website</a></p>
    <h3>Contact Details:</h3>
    <ul>
      <li><b>Name:</b> ${body.name}</li>
      <li><b>Email:</b> ${body.email}</li>
      <li><b>Mobile Number:</b> ${body.phoneNo}</li>
    </ul>
    <h3>Message:</h3>
    <p><b>Subject:</b> ${body.subject}</p>
    <p><b>Message:</b> ${body.message}</p>

    <code>To reply to this message, please use this email address: <b><a href='mailto:${body.email}'>${body.email}</a></b></code>
  `;

  try {
    let transporter = createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    });

    await transporter.sendMail({
      from: `${body.name} <${process.env.MAIL_USER}>`,
      to: ['CodeHelp Support <support@codehelp.in>', 'TheCodeHelp <thcodehelp@gmail.com>'],
      bcc: 'Edudelearn <edudelearn@gmail.com>',
      subject: `CodeHelp Website: ${body.subject}`,
      html: message.replace(/\r\n/g, '<br>'),
    });
    await res.status(200).json({ status: 'OK' });
  } catch (error) {
    return error.message;
  }
};

export default contactFormApi;
