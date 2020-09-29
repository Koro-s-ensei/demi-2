'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');


module.exports = {
	async VideoCommentCreate(ctx) {
		const { fb_id, video_id, comments } = ctx.request.body;
		const result = await strapi
		.query('user', 'users-permissions')
		.model.query(qb => {
		  qb.select('id');
		  qb.where('fb_id', fb_id );
		})
		.fetch();
		const fields = result.toJSON();
		strapi.query('video-comment').create({
			fb_id:fb_id,
			comments:comments,
			user_id:fields.id,
			video_id:video_id
		});
		ctx.send({"message":"Comment added !!"});
	},
};
