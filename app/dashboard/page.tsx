import { getUser } from '@/app/lib/data';

export default async function Page() {
    
    const user = await getUser('');
    return <p>Home</p>

}