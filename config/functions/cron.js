'use strict';
const axios = require('axios');
/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
  '*/1 * * * *': () => {
    console.log('1 minute later');
	//const myPromise = new Promise((resolve, reject) => {
	//	axios.get('https://api.sendible.com/api/v0/users', {
	//	headers: {
	//	  Accept: 'application/json, text/plain, */*',
	//	  'User-Agent': 'axios/0.19.2'
	//	},auth: {
	//	  username: 'matthew@mintsocial.com',
	//	  password: '3609mcoba1ZZ'
	//	}
	//	})
	//	.then(res => {
	//		console.log(res.data);
	//	})
	//	.catch(err => {
	//		console.log('nhi aya');
	///		console.log(err);
	//		ctx.send(err);
	//	});
	//});
  },
};
