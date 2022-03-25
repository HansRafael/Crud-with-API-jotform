var cron = require('node-cron');
const controller = require('./controller');

// # ┌────────────── second (optional) (0-59)
// # │ ┌──────────── minute (0-59)
// # │ │ ┌────────── hour (0-23)
// # │ │ │ ┌──────── day of month (1-31)
// # │ │ │ │ ┌────── month (1-12 (or names))
// # │ │ │ │ │ ┌──── day of week (0-7 (or names, 0 or 7 are Sunday))
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *
// */10 -> a cada 10min/hour/day
//
const cronTaks = cron.schedule('* */30 * * * *', controller.all_forms);


module.exports = {cronTaks}