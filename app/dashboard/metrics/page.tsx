import { auth } from "../../../auth";
import { ActionItem, User } from '@/app/lib/definitions';
import { getUser, getActionItems, updateActionItem } from '@/app/lib/data';
import ActionVisual from '@/app/ui/metrics/action-visual';

export default async function Page() {
    const session = await auth();
    const user = await getUser(session?.user?.email as string);
    const items = await getActionItems(user);
    return (
        <ActionVisual items={items}/>
    )
}