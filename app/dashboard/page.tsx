import { getUser } from '@/app/lib/data'; 
import { useSession } from 'next-auth/react';
import { auth } from "../../auth";

export default async function Page() {
    const user = await auth();
    return <div>
            <div className="pt-20
                            pl-40
                            text-6xl
                            font-bold
                            text-blue-600
                            md: pl-2
                            ">
            Welcome, 
            </div>
            <div className="pt-5
                            pl-40
                            text-6xl
                            text-blue-600
                            font-bold
                            md: pl-2
                            ">
            {user?.user?.name} 
            </div>
            </div>
}