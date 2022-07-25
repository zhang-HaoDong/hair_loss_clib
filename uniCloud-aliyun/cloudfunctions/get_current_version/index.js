'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	
	const version = await db.collection('version').get()
	return{
		code:0,
		msg:'',
		data:{
			version:version.data[0].current_version,
			downLoadLinkUrl:""
		}
	}
};
