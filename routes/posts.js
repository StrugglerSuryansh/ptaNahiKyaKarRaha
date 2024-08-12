const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const PostSchema = new mongoose.Schema({
    imagetext: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }, // Automatically sets the current date and time
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: {
        type: Array,
        default: []
    } // Default number of likes is 0
});

PostSchema.plugin(
    passportLocalMongoose
);
module.exports = mongoose.model("Post", PostSchema);

