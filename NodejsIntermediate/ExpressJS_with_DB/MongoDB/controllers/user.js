const user = require('../models/user')
const { setUser } = require('../services/auth')

async function userSignup(req, res) {
    const { name, email, password, role } = req.body
    await user.create({
        name, email, password, role
    })
    res.redirect('/')
}

async function userLogin(req, res) {
    const { email, password } = req.body
    const selectedUser = await user.findOne({ email, password })
    if (!selectedUser)
        return res.render('login', { invalidUser: true })
    const token = setUser(selectedUser)
    res.cookie('token', token)

    if (selectedUser.role == 'ADMIN')
        return res.redirect('/admin/urls')
    else
        return res.redirect("/")
}

module.exports = {
    userSignup, userLogin
}