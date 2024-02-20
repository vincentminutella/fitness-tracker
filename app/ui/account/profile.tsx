'use client'
import { useState } from 'react';
import { User } from '../../lib/definitions';
import { useForm } from 'react-hook-form';
import { getUser } from '@/app/lib/data';

export default function Profile( { user }: { user: User | undefined } ) {
	
    
    const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data : any) => {
		console.log(getUser(data.email));
	};

    const [editMode, setEditMode] = useState(false);

return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label className="block text-gray-700 font-medium mb-2" htmlFor="name">
					Name
				</label>
				<input
					className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
					id="name"
					type="text"
					defaultValue={user?.name}
                    {...register("name", { required: true })}
				/>
				{errors.name && <p className="text-red-500 text-xs italic">Name is required</p>}
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 font-medium mb-2" htmlFor="email">
					Email
				</label>
				<input
					className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
					id="email"
					type="email"
                    defaultValue={user?.email}
                    {...register("email", { required: true })}
				/>
				{errors.email && <p className="text-red-500 text-xs italic">Email is required</p>}
			</div>

            <div className="mb-4">
				<label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
					Phone
				</label>
				<input
					className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
					id="phone"
					type="phone"
					defaultValue={user?.phone}
                    {...register("phone", { required: false })}
				/>
				{errors.phone && <p className="text-red-500 text-xs italic">Number in wrong format</p>}
			</div>

            <div className="mb-4">
				<label className="block text-gray-700 font-medium mb-2" htmlFor="email">
					Password
				</label>
				<input
					className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
					id="password"
					type="password"
                    defaultValue={user?.password}
                    {...register("password", { required: true })}
				/>
				{errors.password && <p className="text-red-500 text-xs italic">Password is required</p>}
			</div>



			<button
				className="bg-blue-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};