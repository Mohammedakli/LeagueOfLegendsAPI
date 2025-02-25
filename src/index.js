/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const passport = require('passport');
const apiRouter = require('./services/api');
const errors = require('./middleware/errors');
const notFound = require('./middleware/notFound');


const server = express();
// Middlware Généraux
server.use(bodyParser.json());

// Middlware fonctionnels
server.use(apiRouter);

// Last one
server.use(notFound);

// passport Init

server.use(passport.initialize());
server.use(passport.session());

// Middleware d'erreur
server.use(errors);

server.listen(3000);
