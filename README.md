# Bamazon

## Bamazon Customer Interface 

The customer facing side of the Bamazon CLI application is simple to use and simgple to run. Below you will find 
instructions on how to set up and use the program.

### Setup

In order to run the program you will need ensure that node and mysql is installed on your machine. You can find the documentation on how to install node [here](https://nodejs.org/en/) and mysql [here](https://www.mysql.com/downloads/). Additionally you will need to download it's three package dependencies - console.table, inquirer, and mysql. Installing them is easy!

**inquirer**

>"A collection of common interactive command line user interfaces."
>`npm install inquirer`

**mysql**

>"A node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed."
>`npm install mysql`

**console.table**

>"Adds console.table method that prints an array of objects as a table in console"
>`npm install console.table`

Open your terminal via the path that you have saved the Bamazon program and run the `npm install -i` command. You should now be set up and ready to go!

### Running the program
Use the bamazonDB.sql file to populate the mysql table necessary for utilization of the program. Once you have successfully created the database, are in the correct path, and have satisfied all program dependencies, simply input `node bamazonCustomer.js` into your command line to run the application.

The user will be shown a list of items that are available for sale on Bamazon and prompted to select an item by their ID number. Once they select an item they will then be asked to choose a quantity. 

If the amount the user wants can be fulfilled by the number of items in stock the purchase will be successful. The user will then see the total cost of their purchase, a returning list of Bamazon items with the updated quantities after the sale, and the option to keep shopping or end the program.

If the amount the user wants cannot be fulfilled by the number of items in stock the purchase will be unsuccessful. The user will then be given the option to either keep shopping or end the program..

That's it! Have fun!!





