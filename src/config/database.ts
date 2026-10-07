// Get the client
import mysql from 'mysql2/promise';

const getConection = async () => {
  // Create the connection to database
  const connection = await mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'pronoiloan123',
    database: 'nodejspro',
  });

  return connection
}

export default getConection