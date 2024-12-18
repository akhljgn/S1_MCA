// const mysql = require('mysql2');
// require('dotenv').config();

// Set up the connection to the MySQL database
const db = mysql.createConnection({
    host: process.env.DB_HOST,          // DB Host (localhost)
    user: process.env.DB_USER,          // DB User (root)
    password: process.env.DB_PASSWORD,  // DB Password (empty or as per .env)
    database: process.env.DB_NAME       // DB Name (newdatabase)
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // SQL query to create the Admin table with email and password
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Admin (
      admin_id INT AUTO_INCREMENT PRIMARY KEY,
      admin_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,  -- Store hashed password
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Execute the query to create the table
  db.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating Admin table:', err);
      return;
    }
    console.log('Admin table created or already exists');
  });

  // Close the connection after the query is executed
  db.end();
});
