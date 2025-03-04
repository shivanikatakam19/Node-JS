const express = require('express')
const { generateNewShortURL, getShortUrlbyId, deleteShortUrlById, getAnalyticsbyShortId } = require('../controllers/url')
const router = express.Router();

//Rest API Methods

// api to create new short url

router.post('/', generateNewShortURL)

//get analytics data
router.post('/:id', getAnalyticsbyShortId)

// api to get the short url with shortId

router.get('/:id', getShortUrlbyId)

// api to delete the short url with id

router.delete('/:id', deleteShortUrlById)



module.exports = router