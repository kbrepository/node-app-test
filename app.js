const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/user-input-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
});

const User = mongoose.model('User', userSchema);

// Define routes
app.get('/', (req, res) => {
  res.render('home', { layout: 'main' });
});

app.get('/user-form', (req, res) => {
  res.render('user-form', { layout: 'main' });
});

app.post('/submit', (req, res) => {
  const { name, email, phoneNumber } = req.body;

  const newUser = new User({ name, email, phoneNumber });

  newUser.save()
    .then(() => {
      res.render('success', { layout: 'main' });
    })
    .catch((err) => {
      console.error(err);
      res.render('error', { layout: 'main' });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});