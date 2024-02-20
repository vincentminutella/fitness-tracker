import { useSession } from 'next-auth/react';
import { auth } from "../../../auth";
import Profile from '@/app/ui/account/profile';


export default async function Page() {
    
    const user = await auth();

    return (
        <Profile user={user} />
    )
}