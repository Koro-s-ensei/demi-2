'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
	async followUserCreate(ctx){
		const { fb_id, followed_fb_id } = ctx.request.body;
		const result = await strapi
		.query('user', 'users-permissions')
		.model.query(qb => {
		  qb.select('id');
		  qb.where('fb_id', fb_id );
		})
		.fetch();
		if(!result){
			return ctx.send({"message":" user does not found"});
		}
		const user_id = result.toJSON();
		const results = await strapi
		.query('user', 'users-permissions')
		.model.query(qb => {
		  qb.select('id');
		  qb.where('fb_id', followed_fb_id );
		})
		.fetch();
		if(!results){
			return ctx.send({"message":" Followed user does not exist."});
		}
		
		const followed_user_id = results.toJSON();
		strapi.query('follow-users').create({
			fb_id:fb_id,
			user_id:user_id.id,
			followed_user_id:followed_user_id.id,
			followed_fb_id:followed_fb_id
		});
		ctx.send({"message":"follwed successfully!!!"});
	}
};
