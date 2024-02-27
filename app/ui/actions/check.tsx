'use client'
import { ActionItem } from "@/app/lib/definitions";
import { updateActionItem } from "@/app/lib/data";
import React, { useEffect, useState } from 'react';

export default function Check( { item } : { item: ActionItem } ) {
    const action = item;

    return (
        <input type="checkbox" checked={item.complete} onChange={() => updateActionItem(item)}></input>
  );
}