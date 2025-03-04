const jwt = require('jsonwebtoken')
const secretKey = '0204ec20-93ae-4f99-ab15-f46443b264af'

function setUser(user) {
    const payload = {
        id: user._id,
        email: user.email
    }
    return jwt.sign(payload, secretKey)
}

function getUser(token) {
    if (!token)
        return null
    return jwt.verify(token, secretKey)
}

module.exports = {
    setUser, getUser
}