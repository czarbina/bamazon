var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("Connected.");
  fetchList();
});

function fetchList() {
  connection.query("SELECT * FROM products", function(err, results){

  for (var i=0; i<results.length;i++) {
    }
  console.table(results); 
  console.log("= = = = = = = = = = =" + "\n");
  inquirer.prompt ([
   {
    type: "input",
    message: "Select item by ID \n",
    name: "item"
    },
    {
    type: "input",
    message: "How many would you like?",
    name: "quantity"
    }
  ]).then(function(response) { 
    // Matching user selection to item in db 
     var query = "SELECT stock_quantity, product_name, price FROM products WHERE ?";
      connection.query(query, { id: response.item }, function(err, res) {
        
          for (var i = 0; i < res.length; i++) {
            // console.log(res[i].stock_quantity);
            var stockQ = res[i].stock_quantity;
            var item = res[i].product_name;
            var price = res[i].price;
            // console.log(stockQ);
            // console.log(res[i].product_name);
          }
        
        if (response.quantity <= stockQ) {
          
          var stockQuery = "UPDATE products SET stock_quantity = stock_quantity -" +response.quantity + " WHERE ?";
            connection.query(stockQuery, {id: response.item}, function(err, res) {
            // console.log("Congrats! " + response.quantity + " " + item + " " + "coming your way!");
            // console.log("Total cost: $" + (price * response.quantity));
          });

            console.log("\nCongrats! " + response.quantity + " " + item + " " + "coming your way!");
            console.log("Total cost: $" + (price * response.quantity) + "\n");  

            inquirer.prompt ([
            {
              type: "confirm",
              message: "Would you like to make another purchase?",
              name: "decision"
            }
            ]).then(function(response) {
              // console.log(response.decision);
                if (response.decision === true) {
                  fetchList();
              }
                else if (response.decision === false) {
                  console.log("Thanks for shopping!");
                  connection.end();
                }
              })
            }    
            
        else if (response.quantity > stockQ) {
          inquirer.prompt ([
            {
              type: "confirm",
              message: "Womp womp - we don't have that many! Would you like to keep shopping?",
              name: "decision"
            }
            ]).then(function(response) {
               if (response.decision === true) {
                  fetchList();
              }
                else if (response.decision === false) {
                  console.log("Thanks for shopping!");
                  connection.end();
                }
            })
          }
        });    
      });
    });
  };


