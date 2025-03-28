const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const getProjects = require('./controllers/projects.js');
const {sendMail} = require('./controllers/send-mail.js');

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

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//Routes

app.get('/', (req, res) => {
    res.send('Welcome to the Express server!')
});
app.get('/api/projects', getProjects);


app.post('/api/send-email', sendMail);
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;
    
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