"use strict";

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;



// video schema:

const videoSchema = mongoose.Schema({
  person : {type: mongoose.Schema.ObjectId, ref: 'User'},
  
   id: {type: String}
   snippet: {
       title: {type: String},
       descripton: {type: String}
       thumbnails: {type: Sring}
    }

}); 

   



videoSchema.virtual('personName').get(function(){
	return `${this.person.firstName} ${this.person.lastName}`.trim();
	
}); 


videoSchema.methods.serialize = function() {
  return {
    person: this.person,
    id: this.id,
    snippet: {
       title: this.title,
       description: this.description,
       thumbnails: this.thumbnails
      }
  };
};


const Videos = mongoose.model("Videos", videoSchema);

module.exports = { Videos };
