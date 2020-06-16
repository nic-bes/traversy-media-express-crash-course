const express = require('express');
//bring in node js path module
const path = require('path');
//init express
const app = express();
//Add const to link to Members.js 
const members = require('./Members');

//Create a new route, this route gets all members
app.get('/api/members', (req, res) =>
    res.json(members));

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));


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
