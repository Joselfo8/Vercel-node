
const bookModel = require("../models/bookstore-books")
const { handleHttpError } = require("../utils/handleError")
const path = require("path")
const fs = require("fs-extra")
const { parseId } = require("../utils/parseVariable")

const multer = require("multer")
const cloudinary = require("cloudinary")

const storage = multer.diskStorage({
    destination: path.join(__dirname, "storage/uploads"),
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage})
exports.upload = upload.single("cover")


// Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.getFiles = async (req, res) => {
    try {
        console.log('desde getFiles books');
        const books = await bookModel.find()
        res.status(200).send({books})
    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_GET_FILES")
    }
}

exports.getFileById = async (req, res) => {
    try {
        const {id} = req.params
        console.log({id});
        const data = await bookModel.findById(id)
        console.log(data);
        res.send({video: data})
    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_GET_BOOK_BY_ID")
    }
}


exports.postBook = async (req, res) => {
    const { author, title, description, genre, year } = req.body
    
    try {
        const result = await cloudinary.v2.uploader.upload(
            req.file.path, { resource_type: "image" }
        )
        const newBook = new bookModel({
            coverImage: result.url,
            coverImageId: result.public_id,
            author,
            title,
            description,
            genre,
            year,
        })
        await newBook.save()
        await fs.unlink(req.file.path)  
        res.send({
            data: 'The book has been created'
        })
    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_UPLOAD_BOOK")
    }
}

exports.deleteBookById = (req, res) => {
    try {
        const {id} = req.params
        bookModel.deleteOne(
            {_id: parseId(id) },
            (error, docs) => {
                res.send({
                    items: docs
                })
            }
        )
    } catch (error) {
        console.log(error);
    }
}
