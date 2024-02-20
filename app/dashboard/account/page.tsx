import { useSession } from 'next-auth/react';
import { auth } from "../../../auth";
import Profile from '@/app/ui/account/profile';
import { sql } from '@vercel/postgres';
import { User } from '@/app/lib/definitions';
import { getUser } from '@/app/lib/data';
  
export default async function Page() {
   
    
    const authres = await auth();
    const user = await getUser(authres?.user?.email as string);

    return (
        <Profile user={user} />
    )
}