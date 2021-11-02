const express = require('express');

const app = express();

app.use(express.json());

const allRoutes = require('../routes/index');

app.use('/users', allRoutes.userRouter);
app.use('/login', allRoutes.loginRouter);

module.exports = app;