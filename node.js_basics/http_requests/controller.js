const users = require('./userData.js');
exports.getUsers = function (req, res) {
    var response = [
        {
            "users": users
        },
    ];
    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

exports.createUser = function (req, res) {
    body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        postBody = JSON.parse(body);
        var response = [
            {
                "text": "User added successfully"
            },
            postBody
        ]

        res.statusCode = 201;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response))
    })
}

const availableEndpoints = [
    {
        method: "GET",
        getUsers: "/users"
    },
    {
        method: "POST",
        createUser: "/user"
    }
]

exports.invalidUrl = function (req, res) {
    var response = [
        {
            "message": "oops! that is a wrong endpoint, here are the available endpoints "
        },
        availableEndpoints
    ]
    res.statusCode = 404;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}