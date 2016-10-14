var kue = require('kue');
module.exports = kue.createQueue({
  redis: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
});
