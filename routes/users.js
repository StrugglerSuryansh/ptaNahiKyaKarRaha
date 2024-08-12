const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


mongoose.connect("mongodb://localhost:27017/pinterestapp");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },

  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  dp: {
    type: String
  }, // URL or path to the display picture
  posts: [], // Array of post references
});

// Add passport-local-mongoose plugin to handle password hashing and authentication
UserSchema.plugin(passportLocalMongoose);



module.exports = mongoose.model("User", UserSchema);
