const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static('public'));

// Send index.html on any route
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

// Start the server
app.listen(process.env.PORT || 3000, () => console.log('Server running...'));
