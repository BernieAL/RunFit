  
/* Models are fancy constructors compiled from Schema definitions. An instance of a
 model is called a document. Models are responsible
 for creating and reading documents from the underlying MongoDB database. */


  var mongoose = require('mongoose');
  var { Schema } = mongoose.Schema;  //destructuring to get Schema off mongoose.schema

  const requiredNumber = {
      type:Number,
      required: true,
  };
  
  const logEntrySchema = new Schema({
    title: {
      type:String,
      required: true,
    },
    description: String,
    comments: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    latitude: {
      ...requiredNumber,
      min:-90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min:-180,
      max:180
    },
    visitData:{
      required: true,
      type: Date,
    }
}, {
  timestamps:true,
});

//created a model called LogEntry
  const LogEntry = mongoose.model('LogEntry',logEntrySchema)
//now we can make instances of the model (called documents)
//when we make a new instance of the model, we can call the db methods on it

  module.exports = LogEntry;