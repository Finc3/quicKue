#!/usr/bin/env node
var kue = require('kue');
var basicAuth = require('basic-auth-connect');
var queue = require('./queue');
var express = require('express');
var app = express.createServer();
app.use(basicAuth(process.env.USER_NAME || 'admin', process.env.PASSWORD));
kue.app.set('title', process.env.TITLE || 'quicKue');
app.use(kue.app);
app.listen(process.env.PORT || 3000);

module.exports = app;
