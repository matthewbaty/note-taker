const PORT = process.env.PORT || 3001;
const express = require('express');
const apiRoutes =require('./routes/api');
const htmlRoutes = require('./routes/html');

const app = express();

