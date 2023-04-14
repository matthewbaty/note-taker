// packages
const express = require('express');
// const apiRoutes =require('./routes/api');
const htmlRoutes = require('./routes/html');

// port
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listen to the server
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));
