const express = require('express')
const router = express.Router();
const { restrictTo } = require('../middlewares/auth')
const url = require('../models/url');

router.get('/urls', restrictTo(['ADMIN']), async (req, res) => {
    const allURLs = await url.find({})
    return res.render('home', {
        urls: allURLs
    })
})

module.exports = router