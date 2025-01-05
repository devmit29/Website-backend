const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
  .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

const contactSchema = new mongoose.Schema({
    name: { type: String , required: false},
    email: { type: String, required: false },
    phone: { type: String, required: false },
    message: { type: String, required: false },
});

const Visiters = mongoose.model('Visiters', contactSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the Express server!')
});

app.post('/send-email', async (req, res) => {
    const { email } = req.body;
    console.log(req.body);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: (process.env.EMAIL),
            pass: (process.env.APP_PASSWORD), // Use an app-specific password if using Gmail
        },
    });
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
              <br>
              <p>Best regards,</p>
              <p><strong>Dev Mittal</strong></p>
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
});

app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;
    
// });
    const newVisiter = new Visiters({
      name,
      email,
      phone,
      message,
    });
  
    try {
      await newVisiter.save();
      res.status(200).send('Contact information saved');
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to save contact information');
    }
  });
    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });