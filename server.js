const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(process.env.PORT || 3000, () => console.log('Server running...'));
