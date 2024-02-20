import { useSession } from 'next-auth/react';
import { auth } from "../../../auth";
import Profile from '@/app/ui/account/profile';
import { sql } from '@vercel/postgres';
import { User } from '@/app/lib/definitions';

 
async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }
  
export default async function Page() {
   
    
    const authres = await auth();
    const user = await getUser(authres?.user?.email as string);

    return (
        <Profile user={user} />
    )
}