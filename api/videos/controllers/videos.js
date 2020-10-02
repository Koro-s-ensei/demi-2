'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
var multer  =   require('multer');
var upload = multer({ dest: 'public/uploads/' });
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
module.exports = {
	async videoCreate(ctx) {
		console.log('hello world');
		return 'Hello World!';
	},
	
	async list(ctx) {
    const result = await strapi
    .query('videos')
    .model.query(qb => {
      qb.where('id','>' ,1);
    })
    .fetch();
  
  const fields = result.toJSON();
    return fields;
  },
  async videoFileUpload(ctx) {
	// const { data, files } = parseMultipartData(ctx);
	  //console.log(data);
	  
		 //const {videobase64}= ctx.request.files;
	  try {
		 return ctx.send({"message":ctx});
		const { fb_id, description,videobase64,thum,gif } = ctx.request.body;
		const start = Date.now();
		const fileName = `${start}.mp4`;
		console.log(fileName);
		
		let data_up= videobase64.file_data;
		let uploaded_video = Buffer.from(data_up, 'base64');
		//console.log(uploaded_video);
		//upload.single(uploaded_video);
		//const fileName = 'video.mp4';
		
		await fs.writeFileSync(`${__dirname}/../../../public/images/${fileName}`, uploaded_video);
		
		return ctx.send({"message":fileName});
		return ctx.send({"message":uploaded_video});
		const result = await strapi
		.query('user', 'users-permissions')
		.model.query(qb => {
		  qb.select('id');
		  qb.where('fb_id', fb_id );
		})
		.fetch();
		const fields = result.toJSON();
		
		strapi.query('videos').create({
			fb_id:fb_id,
			description:description,
			user:fields.id,
			video:video,
			thum:thum,
			gif:gif
			
		});
		return fields.id;
	  } catch (error) {
		  console.log(error);
		  return error; 
	  }
  },
	async listsByfbId(ctx) {
		const param = ctx.request.body;
		const { fb_id } = param;
		if(!fb_id){
			return ctx.badRequest(null, 'Fb id is missing.');
		}
		const result = await strapi
		.query('videos')
		.model.query(qb => {
		qb.where('fb_id', fb_id);
		qb.limit(10);
		})
		.fetchAll();

		if(result.length==0){
			return ctx.badRequest(null, 'No data found..');
		}
		
		const fields = result.toJSON();
		return fields;
	},
	async listsByUserId(ctx) {
		const param = ctx.request.body;
		const { user_id } = param;
		if(!user_id){
			return ctx.badRequest(null, 'user id is missing.');
		}
		const result = await strapi
		.query('videos')
		.model.query(qb => {
		qb.where('user', user_id);
		qb.limit(10);
		})
		.fetchAll();
		console.log(result.length)
		if(result.length==0){
			return ctx.badRequest(null, 'No data found..');
		}
		
		const fields = result.toJSON();
		return fields;
	},
	async videosUpload(ctx) {
		console.log(ctx);
	}
};
