'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

// module.exports = {};


/* module.exports = {
  // GET /hello
  find: async ctx => {
    ctx.send('Hello World!');
	console.log('');
  },
}; */


const axios = require('axios');
module.exports = {
	
	getSendible: async(ctx)=> {
	console.log(process.env.SENDIBLE_URL);
		axios.get('https://api.sendible.com/api/v0/users', {
		headers: {
		  Accept: 'application/json, text/plain, */*',
		  'User-Agent': 'axios/0.19.2'
		},auth: {
		  username: 'matthew@mintsocial.com',
		  password: '3609mcoba1ZZ'
		}
		})
		.then(res => {
			// console.log(res.data);
			const getAuthorDetail = res.data;
			 getAuthorDetail.forEach(async author => {
				console.log(author);
				ctx.send('Data extract');
				/*await strapi.query('sendible-users').create({
					api_key: author.api_key,
					parent_user_id: author.parent_user_id,
					sendible_user_id: author.sendible_user_id,
					color: author.color,
					email: author.email,
					fullname: author.fullname,
					lineage: author.lineage,
					login: author.login,
					avatar: author.avatar,
					user_status: author.user_status,
					is_active: author.is_active,
					profile: author.profile,
					last_login: author.last_login,
					is_owner: author.is_owner,
					sms_credits: author.sms_credits,
					email_credits: author.email_credits,
					trial_start_date: author.trial_start_date,
					trial_days_left: author.trial_days_left,
					state: author.state,
				});*/
				
			});
					
			
			// ctx.send(res.data);
			
			/* await strapi.query('sendible-users').create({
				date: new Date(),
				count: data.pull_count,
			}); */

		})
		.catch(err => {
			console.log('nhi aya');
			console.log(err);
			ctx.send(err);
		});
		
	}
	
};