// Student Name: Naga Sindhuri Munjila
// Student Id: 1225912742
// Dude Date: 02/18/2024

const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});
const loanRouter = require('./routes/loanRoutes')
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DATABASE}`
,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(`MongoDB connection succeeded with ${process.env.DATABASE}...`))
.catch((err) => console.log('Error in DB connection: ' + err));

app.use(bodyParser.json());
app.use('/api/loans', loanRouter);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));