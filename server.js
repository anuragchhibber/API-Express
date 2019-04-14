const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// create express app
const app = express()
const port = 3000

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(cors())

//configuring the database
const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose')

//Connecting to the database
mongoose.connect(dbConfig.url,{useNewUrlParser: true});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Login application"});
    
});

require('./app/routes/login.routes.js')(app);

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});

//app.get('', (req, res) => res.send('Hello World !'))
//app.listen(port, () => console.log('LoginEx app listening on port 3000'))