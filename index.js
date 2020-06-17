const express = require('express');
//bring in node js path module
const path = require('path');
const logger = require('./middleware/logger')

//init express
const app = express();

//Initialize the middleware
//app.use(logger);

//Body Parser Middleware - will allow us to handle raw json
app.use(express.json());
//To handle form submissions
app.use(express.urlencoded({ extended: false }));

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API Routes
app.use('/api/members', require('./routes/api/members'))

// When we deploy the server might not run it on 5000, it will have the port number in an environment variable 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));






/*Create you endpoints/route handlers
app.get('/', function (req, res) {
    // You could fetch from database
    // Load pages
    // Return JSON
    res.send('Hello World!');
});

//Listen on a port

app.listen(5000);*/
