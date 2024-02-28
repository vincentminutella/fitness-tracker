const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function createUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

   } catch (error) {
     console.error('Error creating users:', error);
     throw error;
   }
 }

 async function seedActionItems(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS actionitems (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      text VARCHAR(120),
      dueby DATE,
      ownerid VARCHAR(60),
      complete BOOLEAN
    );
  `;

   } catch (error) {
     console.error('Error creating action items:', error);
     throw error;
   }
 }


async function main() {
  const client = await db.connect();

  await createUsers(client);
  await createActionItems(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to create the database:',
    err,
  );
});
