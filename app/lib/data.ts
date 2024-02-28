'use server'
import { sql } from '@vercel/postgres';
import {
  ActionItem,
  User
} from './definitions';

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users.');
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
    console.error(`Failed to update user: ${user.name}`, error);
    throw new Error(`Failed to update user: ${user.name}`);
  }
}

export async function getActionItems(user: User) {
  try {
    const results = await sql`SELECT * FROM actionitems WHERE ownerid LIKE ${user.id} ORDER BY dueby`;
    return results.rows as ActionItem[];
  } catch (error) {
    console.error('Failed to fetch items:', error);
    throw new Error('Failed to fetch items.');
  }
}


export async function updateActionItem(item: ActionItem) {
  try {
    const results = await sql`UPDATE actionitems SET complete = ${!item.complete} WHERE id = ${item.id}`;
  } catch (error) { 
    console.error(`Failed to update item: ${item.id}`, error);
    throw new Error(`Failed to update item: ${item.id}`);
  }
}
