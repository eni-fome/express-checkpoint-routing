const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const checkWorkingHours = require('./workingHoursMiddlewares');


app.use(checkWorkingHours);
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/views/services.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
