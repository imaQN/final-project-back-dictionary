var mysql = require('mysql')
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MiamonicaEver29",
    database: "kuis_arkhi1"
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});