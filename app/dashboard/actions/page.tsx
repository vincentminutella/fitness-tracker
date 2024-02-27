import { useSession } from 'next-auth/react';
import { auth } from "../../../auth";
import { ActionItem, User } from '@/app/lib/definitions';
import { getUser, getActionItems, updateActionItem } from '@/app/lib/data';
import ActionTracker from '@/app/ui/actions/todo-list';

export async function itemUpdated(item: ActionItem) {
    'use server'

    await updateActionItem(item);
    console.log(item);
}

export default async function Page() {

    const session = await auth();
    const user = await getUser(session?.user?.email as string);
    const items = await getActionItems(user);
    return (
        <ActionTracker items={items} update={itemUpdated} />
    )
}