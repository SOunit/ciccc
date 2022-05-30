const mongoose = require('mongoose')
const { Schema, model, SchemaTypes } = mongoose

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    lowercase: true,
  },
  published: {
    type: String,
    default: false,
  },
  author: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  content: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
  comments: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Comment',
    },
  ],
})

blogSchema.pre('save', function (next) {
  const blog = this
  blog.updatedAt = Date.now()
  next()
})

const Blog = model('Blog', blogSchema)
module.exports = Blog
