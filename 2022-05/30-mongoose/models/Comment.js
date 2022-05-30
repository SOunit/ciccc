const mongoose = require('mongoose')
const { Schema, model } = mongoose

const commentSchema = new Schema({
  author: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})

const Comment = model('Comment', commentSchema)
module.exports = Comment
