import { sql } from '@vercel/postgres';
import {
  User
} from './definitions';

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getUserById(id: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${id}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}


export async function updateUser(user: User) {
  try {
    const results = await sql`UPDATE users SET name = ${user.name}, email = ${user.email}, 
                              phone = ${user.phone}, password = ${user.password} WHERE id=${user.id}`;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}