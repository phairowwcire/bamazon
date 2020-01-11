var mysql = require("mysql")
require("console.table")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
})

connection.connect(function(err){
    if(err){
        console.log(err)
    }

    console.log("connection id: ", connection.threadId)
    display()
})

function display()

    {
          connection.query("select * from products", function(err,results){
              console.table(results)
          })

    }
