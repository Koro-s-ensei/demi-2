'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
	async favSoundsCreate(ctx) {
		const { fb_id, sound_id } = ctx.request.body;
		
		const result = await strapi
			.query('user', 'users-permissions')
			.model.query(qb => {
			  qb.select('id');
			  qb.where('fb_id', fb_id );
			})
		.fetch();
		if(!result){
			return ctx.send({"message":"user does not found!!"});
		}
		const fields = result.toJSON();
		strapi.query('fav-sound').create({
			fb_id:fb_id,
			sound_id:sound_id,
			user_id:fields.id
		});
		ctx.send({"message":"fav-sound  added !!"});
	}
};