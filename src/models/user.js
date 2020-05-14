


var mongoose = require('mongoose');
var { Schema } = mongoose;



const requiredString = {
	type: String,
	required: true,
	trim: true,
}

const requiredNumber = {
	type: Number,
	required: true,
}

const userSchema = new Schema ({
	fname: {
	  ...requiredString,
	},
	lname:{
	  ...requiredString,
	},
	email: {
		...requiredString,
	},
	phoneNumber: {
		...requiredNumber,
	},
	password: {
		...requiredString
	}
})

const userEntry = mongoose.model('userEntry', userSchema);

module.exports = userEntry