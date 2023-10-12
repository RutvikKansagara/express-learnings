// Importing the express module
const express = require('express');
const app = express();
const port = 3000;

// Create a connection to the database
const mysql = require('mysql');
const PORT = 4000;
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: "blog" 
});
// Open the MySQL connection
connection.connect(error => {
if (error){
console.log("A error has been occurred "
+ "while connecting to database."); 
throw error;
}
// If Everything goes correct, Then start Express Server
app.listen(PORT, ()=>{
console.log("Database connection is Ready and "
+ "Server is Listening on Port ", PORT);
})
});