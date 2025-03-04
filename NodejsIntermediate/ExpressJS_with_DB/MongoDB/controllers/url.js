const url = require('../models/url')
const shortid = require('shortid')

async function generateNewShortURL(req, res) {
    const shortId = shortid(8);
    const body = req.body
    if (!body.redirect_url)
        return res.status(400).json({ error: 'Url is missing' })
    await url.create({
        shortId: shortId,
        redirectUrl: body.redirect_url,
        visitHistory: [],
        createdBy: req.user.id
    })
    return res.redirect('/')
}

async function getShortUrlbyId(req, res) {
    const shortId = req.params.id
    const entry = await url.findOneAndUpdate({ shortId: shortId }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    });
    res.redirect(entry.redirectUrl)
}

async function deleteShortUrlById(req, res) {
    await url.findByIdAndDelete(req.params.id)
    return res.json({ status: 'success', deletedId: req.params.id })
}

async function getAnalyticsbyShortId(req, res) {
    const shortId = req.params.id
    const result = await url.findOne({ shortId })
    return res.json({ 'Total clicks': result.visitHistory.length, 'Analytics': result.visitHistory })
}

module.exports = {
    getShortUrlbyId, generateNewShortURL, deleteShortUrlById, getAnalyticsbyShortId
}
