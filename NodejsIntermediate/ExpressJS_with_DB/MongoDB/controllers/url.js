const url = require('../models/url')
const shortid = require('shortid')

async function getAllUrls(req, res) {
    const allURLs = await url.find()
    return res.render('home', {
        urls: allURLs
    })
}

async function generateNewShortURL(req, res) {
    const shortId = shortid(8);
    const body = req.body
    if (!body.redirect_url)
        return res.status(400).json({ error: 'Url is missing' })
    await url.create({
        shortId: shortId,
        redirectUrl: body.redirect_url,
        visitHistory: [],
    })
    return res.redirect('/url')
}

async function deleteShortUrlById(req, res) {
    const data = await url.deleteOne({ shortId: req.params.id })
    if (data.deletedCount == 1)
        return res.redirect('/url')
    else
        return res.status(500).send({
            success: false,
            message: 'Error while creating the todo.'
        });
}

module.exports = {
    generateNewShortURL, deleteShortUrlById, getAllUrls
}
