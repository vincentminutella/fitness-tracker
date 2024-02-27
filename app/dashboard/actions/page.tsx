import { useSession } from 'next-auth/react';
import { auth } from "../../../auth";
import { User } from '@/app/lib/definitions';
import { getUser } from '@/app/lib/data';
import ActionTracker from '@/app/ui/actions/todo-list';

export default async function Page() {

    const session = await auth();
    const user = await getUser(session?.user?.email as string);

    return (
        <ActionTracker user={user} />
    )
}