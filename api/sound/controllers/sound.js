'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
	async saveSound(ctx) {
		const { fb_id, sound_name, description,thum, sound_section_id } = ctx.request.body;
		const result = await strapi
		.query('user', 'users-permissions')
		.model.query(qb => {
		  qb.select('id');
		  qb.where('fb_id', fb_id );
		})
		.fetch();
		const fields = result.toJSON();
		strapi.query('sound').create({
			uploaded_by:fb_id,
			sound_name:sound_name,
			user_id:fields.id,
			description:description,
			sound_section_id:sound_section_id
		});
		ctx.send({"message":"sound  added !!"});
	}
};
