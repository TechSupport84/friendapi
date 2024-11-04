const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"friends",
    password: "Jeancy01@"

})

module.exports = db