const express = require('express')
const { generateNewShortURL, deleteShortUrlById, getAllUrls } = require('../controllers/url')
const router = express.Router();

//Rest API Methods

// api to get all the urls
router.get('/', getAllUrls)

// api to create new short url

router.post('/new', generateNewShortURL)

// api to delete the short url with id

router.get('/delete/:id', deleteShortUrlById)

module.exports = router