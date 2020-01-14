var mysql = require("mysql")
require("console.table")

var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
})

connection.connect(function (err) {
    if (err) {
        console.log(err)
    }

    console.log("connection id: ", connection.threadId)
    display()
})

function display() {
    connection.query("select * from products", function (err, results) {
        console.log(results)
        console.table(results)

        askUser()
    })

}
function askUser() {
    inquirer.prompt([{
        type: "input",
        message: "Which item ID do you want to select?",
        name: "item_ID"
    },
    {
        type: "input",
        message: "How many units do you want to buy?",
        name: "stock_quantity"
    }

    ]).then(function (userInput) {
        console.log(userInput.item_ID, userInput.stock_quantity)
        var statement = connection.query("select * from products where item_id=?", userInput.item_ID, function (err, results) {
            console.log(results)
            console.table(results)

            var getStockQuantity = results[0].stock_quantity - userInput.stock_quantity

            statement = connection.query("update products set stock_quantity = ? where item_ID=?", [getStockQuantity, userInput.item_ID], function (err, results) {
                display()
            })
            console.log(statement.sql)
        })

        console.log(statement.sql)

    })
}