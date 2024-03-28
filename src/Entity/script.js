const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'FoodDelivery',
    password: 'Azlogics',
    port: 5432,
});

// Function to read and execute SQL file
async function executeSqlFile(filePath) {
    try {
        // Read the SQL file
        const sql = fs.readFileSync(filePath, 'utf8');
        
        // Execute the entire SQL file as a single query
        await pool.query(sql);
        
        console.log('SQL file executed successfully');
    } catch (error) {
        console.error('Error executing SQL file:', error);
    } finally {
        // Close the pool when done
        await pool.end();
    }
}

// Call the function with the path to your SQL file
const sqlFilePath = 'D:/Projects/Food_Delivery_App/src/Entity/Pricing.sql';
executeSqlFile(sqlFilePath);
