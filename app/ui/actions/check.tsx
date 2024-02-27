'use client'
import { ActionItem } from "@/app/lib/definitions";
import { updateActionItem } from "@/app/lib/data";
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';


export default function Check( { item } : { item: ActionItem } ) {
    const action = item;

    const router = useRouter();

    async function handleChange(item: ActionItem) {
  
      updateActionItem(item);
      
      startTransition(() => {
        router.refresh();
      });
    }
  

    return (
        <input type="checkbox" checked={item.complete} onChange={() => handleChange(item)}></input>
  );
}