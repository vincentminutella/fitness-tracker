'use client'
import { useState } from 'react';

export default function Profile({ user }) {

    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <label>Name:
                <a>
                    {user.user.name}
                </a>
            </label>
            <label>Email:
                <a>
                    
                </a>
            </label>
        </div>
    ) 
}