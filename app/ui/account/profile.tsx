'use client'
import { useState } from 'react';
import { User } from '../../lib/definitions';

export default function Profile( { user }: { user: User | undefined } ) {

    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <label>Name:
                <a>
                    {user?.name}
                </a>
            </label>
            <label>Email:
                <a>
                    {user?.email}
                </a>
            </label>
        </div>
    ) 
}