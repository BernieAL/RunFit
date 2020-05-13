var mongoose = require('mongoose');
var { Schema } = mongoose;


const requiredString = {
	type: String,
	required: true,
}

const requiredNumber = {
	type: Number,
	required: true,
}

const itemSchema = new Schema ({
	name: {
	  ...requiredString,
	},
	itemId: {
		...requiredString,
	},
	price:{
		...requiredNumber
	},
	description:{
		...requiredString
	},
	category:{
		...requiredString
	}
})

const itemEntry = mongoose.model('itemEntry', itemSchema);

module.exports = itemEntry