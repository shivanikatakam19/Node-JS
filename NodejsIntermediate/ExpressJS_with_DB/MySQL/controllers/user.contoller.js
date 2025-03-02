// get all todolist according to the logged in user

const connection = require("../config/db")

const getUser = async (req, res) => {
    try {
        const data = await connection.query('SELECT * FROM users');
    } catch (error) {
        console.log(error)
        res.send({ success: false, message: 'Error in Fetching the Todos.' })
    }
}

module.exports = { getUser } 