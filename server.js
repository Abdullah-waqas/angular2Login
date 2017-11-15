// const express = require('express');
// const http = require('http');
// const path = require('path');

// const app = express();
// // Run the app by serving the static files
// // in the dist directory
// app.use(express.static(__dirname + 'dist'));

// app.listen(process.env.PORT || 8080);

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

// console.log("Console Listening!");


const express = require('express');

const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

// console.log("Console Listening!");