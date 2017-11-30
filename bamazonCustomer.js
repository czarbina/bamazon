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
     var query = "SELECT stock_quantity, product_name FROM products WHERE ?";
      connection.query(query, { id: response.item }, function(err, res) {
        
          for (var i = 0; i < res.length; i++) {
            // console.log(res[i].stock_quantity);
            var stockQ = res[i].stock_quantity;
            // console.log(stockQ);
            // console.log(res[i].product_name);
            // if (response.quantity <= response.stock_quantity) {
            // console.log("This didn't break");
          // }
        }
        // console.log(stockQ);
        // console.log(response.quantity)
        if (response.quantity <= stockQ) {
          console.log("We have some in stock!");
          var stockQuery = "UPDATE products SET stock_quantity = stock_quantity -" +response.quantity + " WHERE ?";
            connection.query(stockQuery, {id: response.item}, function(err, res) {
            fetchList();
          })
        }
            
        else if (response.quantity > stockQ) {
          console.log("Womp womp!");
        }

      });    
    })
  })
}


   // var query = "SELECT stock_quantity FROM products WHERE ?";
   // connection.query(query, {product_name = response.item}, function(err, res) { 

   // })

// function selectItem() {
  
//  }

  

  // connection.end();
