#!/usr/bin/env node
var kue = require('kue');
var basicAuth = require('basic-auth-connect');
var queue = require('./queue');
kue.app.use(basicAuth(process.env.USER_NAME or 'admin', process.env.PASSWORD));
kue.app.set('title', process.env.TITLE or 'quicKue');

kue.app.listen(process.env.PORT or 3000);
