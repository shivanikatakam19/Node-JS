const express = require('express')
const url = require('../models/url');
const { restrictTo } = require('../middlewares/auth');

const router = express.Router();

router.get('/', restrictTo(['NORMAL', 'ADMIN']), async (req, res) => {
    const allURLs = await url.find({ createdBy: req.user.id })
    return res.render('home', {
        urls: allURLs
    })
})

router.get('/signup', async (req, res) => {
    return res.render('signup')
})

router.get('/login', async (req, res) => {
    return res.render('login')
})

module.exports = router