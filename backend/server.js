const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 8082;


app.use(morgan('tiny'));
app.use('/cc',routes);

app.listen(PORT,console.log('Server is listening at port:'+PORT));