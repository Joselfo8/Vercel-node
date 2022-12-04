const mongoose = require("mongoose")

const BookScheme = new mongoose.Schema(
    {
        coverImage: {
            type: String,
            default: 'https://picsum.photos/200'
        },
        author: {
            type: String
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        genre: {
            type: String
        },
        year: {
            type: Number
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('bookstore-book', BookScheme)
