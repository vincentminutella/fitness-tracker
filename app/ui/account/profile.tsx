import { User } from '../../lib/definitions';
import { getUser, updateUser } from '@/app/lib/data';
import bcrypt from 'bcrypt';


async function updateUserData(formData: any) {
  'use server';
  
  const user: User = {
 		id: formData.get('id'),
 		name: formData.get('name'),
 		email: formData.get('email'),
 		phone: formData.get('phone'),
 	  password: formData.get('password')
  }
  
  const update = await updateUser(user);
}

export default function Profile( { user } : { user: User | undefined } ) {
  return (
    <form action={updateUserData} className='w-full max-w-sm py-20'>
	  <input type="hidden" name="id" defaultValue={user?.id} />
    <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Name:
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" type="text" name="name" defaultValue={user?.name} />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Email:
      </label>
    </div>
    <div className="md:w-2/3">
      <input readOnly className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" type="email" name="email" defaultValue={user?.email} />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Phone:
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" type="tel" name="phone" defaultValue={user?.phone} />
    </div>
  </div> <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
    
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 hidden appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" type="password" name="password" defaultValue={user?.password} />
    </div>
  </div>
  <div className="flex items-center justify-center mb-6">
      <button type="submit" className="shadow bg-orange-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Submit</button>
  </div>
  </form>
  );
}