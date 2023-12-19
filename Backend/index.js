const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./Database/db'); // Import your MongoDB connection
const routes = require('./Routers/routes');


const port = process.env.PORT || 5000

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 
// Router.use()
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes); // Mount your routes under '/api' prefix

// Home Route 
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
