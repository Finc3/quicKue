var kue = require('kue');
module.exports = kue.createQueue({
  redis: process.env.REDISCLOUD_URL || 'redis://127.0.0.1:6379'
});
