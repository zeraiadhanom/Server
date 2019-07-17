"use strict";

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

// video schema:

const videoSchema = mongoose.Schema({
  person : {type: mongoose.Schema.ObjectId, ref: 'User'}, 

  _id: {
    videoId: String
  }, 
  snippet: {
    publishedAt: Date,
    channelId: String,
    title: String,
    description: String,
    thumbnails: {
        default: String      
     }
    }
}); 

/*videoSchema.virtual('personName').get(function(){
	return `${this.person.firstName} ${this.person.lastName}`.trim();
});  */

videoSchema.methods.serialize = function() {
  return {
    person: this.person,
    _id: {
      videoId: this.id.videoId
    },
    snippet: {
      publishedAt: this.snippet.publishedAt,
      channelId: this.snippet.channelId,
      title: this.snippet.title,
      description: this.snippet.description,
      thumbnails: {
        default: this.snippet.thumbnails.default
      }
    }
  };
};


const Videos = mongoose.model("Videos", videoSchema);

module.exports = { Videos };
