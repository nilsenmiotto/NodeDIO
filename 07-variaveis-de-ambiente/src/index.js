import * as db from './utils/database.js';

async function main() {
  await db.connectToDatabase(process.env.DATABASE_USER, process.env.DATABASE_PASSWORD);
}

main();