const express = require("express")
const controller = require("../controllers/bookstore-books")
const router = express.Router()


router.get(
    `/`,
    controller.getFiles
)

router.get(
    `/:id`,
    controller.getFileById
)

router.post(
    `/`,
    controller.upload, 
    controller.postBook
)

router.delete(
    `/:id`,
    controller.deleteBookById
)

module.exports = router