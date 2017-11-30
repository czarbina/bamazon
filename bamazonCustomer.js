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
     var query = "SELECT product_name FROM products WHERE ?";
      connection.query(query, { id: response.item }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].product_name);
        }
      });    
    })
  })
}


   

// function selectItem() {
  
//  }

  

  // connection.end();
