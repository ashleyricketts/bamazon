var mysql = require("mysql");

var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "5752199",
  database: "bamazon_db"
});


connection.connect(function(err) {
    if (err) throw err;
        
    welcome();
});

function welcome() {
    inquirer.prompt([{

        type: "confirm",
        name: "confirm",
        message: "Welcome to Bamazon! Would you like to view our items?",
        default: true

    }]).then(function(user) {
        if (user.confirm === true) {
            displayItems();
        } else {
            console.log("Come back soon!");
        }
    });
};

function displayItems() {
    connection.query("SELECT * FROM products", function(err, res){
        
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " | "
                        + res[i].product_name + " | "
                        + res[i].department_name + " |Price: "
                        + res[i].price + " |Quantity: "
                        + res[i].stock_quantity + "\n");
        }

        buy();

    });
  };

function buy() {
    inquirer
    .prompt([
    {
        name: "item_id",
        type: "input",
        message: "What is the ID of the product you'd like to buy?",
    },
    {
        type: 'input',
        name: 'quantity',
        message: 'How many would you like?'
    }])
    .then(function(answer){

        connection.query("SELECT * FROM products WHERE item_id=?", answer.item_id, function(err, res){
            
            for (var i = 0; i < res.length; i++) {

                if (answer.quantity > res[i].stock_quantity) {
                    console.log("Not enough in stock.");
                    welcome();
                }

                else {
                    console.log("Item: " + res[i].product_name + "\n" +
                    "Total: $" + res[i].price * answer.quantity);

                    var updateStock = (res[i].stock_quantity - answer.quantity);
                    var item = answer.item_id;
                    confirmPurchase(updateStock, item);
                }
            }
        })
    })
};

function confirmPurchase(updateStock, item) {
    inquirer.prompt([{
        type: "confirm",
        name: "confirmation",
        message: "Are you sure you would like to purchase this item and quantity?",
        default: true
    }]).then(function(userConfirm){
        if (userConfirm.confirmPurchase === true) {
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: updateStock
            }, {
                item_id: item
            }], function(err, res) {});

            console.log("Transaction completed. Thank you.");
            welcome();
        }

        else {
            console.log("Thanks!")
            welcome();
        }
    });
};
