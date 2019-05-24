"use strict";

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;



// video schema:

const videoSchema = mongoose.Schema({
  person : {type: mongoose.Schema.ObjectId, ref: 'User'},
  title: {type: String},
  description: {type: String},        
  videoId: {type: String}
}); 

   



videoSchema.virtual('personName').get(function(){
	return `${this.person.firstName} ${this.person.lastName}`.trim();
	
}); 


videoSchema.methods.serialize = function() {
  return {
    id: this._id,
    person: this.person,
    title: this.title,
    description: this.description,
    videoId: this.videoId
  };
};


const Videos = mongoose.model("Videos", videoSchema);

module.exports = { Videos };
