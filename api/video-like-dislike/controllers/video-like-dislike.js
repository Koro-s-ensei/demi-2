'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
	async videoLikeCreate(ctx) {
		const { fb_id, video_id } = ctx.request.body;
		const result = await strapi
		.query('user', 'users-permissions')
		.model.query(qb => {
		  qb.select('id');
		  qb.where('fb_id', fb_id );
		})
		.fetch();
		const fields = result.toJSON();
		strapi.query('video-like-dislike').create({
			fb_id:fb_id,
			video_id:video_id,
			user_id:fields.id
		});
		ctx.send({"message":"video liked  !!"});
	}
};
