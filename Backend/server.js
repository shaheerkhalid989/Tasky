require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const bodyParser= require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
require('./utils/db')  // Connect database with server

app.use(bodyParser.json());
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// app.get('/', (req, res) =>{
//     res.send('Hello world');
// });

app.use('/api', userRoutes);






app.listen(port, () =>{
    console.log(`Workspace API server running on port ${port}`);
});