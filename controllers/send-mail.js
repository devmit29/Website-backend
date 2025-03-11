import nodemailer from 'nodemailer';

async function sendMail(req, res) {
    const { email } = req.body;
    console.log(req.body);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: (process.env.EMAIL),
            pass: (process.env.APP_PASSWORD), // Use an app-specific password if using Gmail
        },
    });
    const signature = `
    <div>
      <p>Thanks & Regards,</p>
      <p><strong>Dev Mittal</strong><br />
         B.Tech. in Computer Science and Engineering<br />
         The LNM Institute of Information Technology,<br />
         Jaipur - 302031 <br/>
         +91-9660081317
      </p>
    </div>
  `;
    let mailOptions = {
      from: 'devmittal37@gmail.com',
      to: email,
      subject: 'Thank You for Reaching Out! 🌟',
      text: `Hey!\n\n
  
      Thank you for visiting my portfolio and taking the time to connect with me! It means a lot to me, and I hope you found something interesting or inspiring on my website.\n
      
      If you have any questions, feedback, or just want to chat about something cool, feel free to reply to this email—I’d love to hear from you!\n
      
      Looking forward to staying in touch.\n
      
      Best regards,\n
      Dev Mittal\n
      +91-7976186965`,
          html: `
              <p>Hey!</p>
              <p>Thank you for visiting my portfolio and taking the time to connect with me! It means a lot to me, and I hope you found something interesting or inspiring on my website.</p>
              <p>If you have any questions, feedback, or just want to chat about something cool, feel free to reply to this email—I’d love to hear from you!</p>
              <p>Looking forward to staying in touch.</p>
              <br/>
              <br/>
              ${signature}
          `,
  };
  
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      }
}

export { sendMail };