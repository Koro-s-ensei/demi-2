'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
    async deviceTokonCreate(ctx){
        const { fb_id, phone_id, tokon } = ctx.request.body;
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
		strapi.query('device-tokon').create({
			fb_id:fb_id,
			tokon:tokon,
			user_id:fields.id,
			phone_id:phone_id
		});
		ctx.send({"message":"token  added !!"});
    }
};
