const databaseData = {
  host: "localhost",
  port: 543,
  user: "admin",
  password: "password",
  database: "my_database"
}

async function connectToDatabase(database) {
  // Simulate a database connection delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Connected to the ${database} database !`);
      resolve();
    }, 1000);
  });
}

async function disconnectFromDatabase() {
  // Simulate a database disconnection delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Disconnected from the database !");
      resolve();
    }, 1000);
  });
}


export {
  connectToDatabase,
  disconnectFromDatabase,
  databaseData
};