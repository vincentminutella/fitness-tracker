'use client'
import { ActionItem, User } from '../../lib/definitions';
import { getActionItems, updateActionItem } from '@/app/lib/data';
import bcrypt from 'bcrypt';
import Check from './check';

export default function ActionTracker( { items } : { items: ActionItem[] } ) {
    
   return (
      <main>
      <section className="flex 
                          flex-col
                          items-center
                          justify-center
                          py-20
                          ">
        <h1 className="text-blue-600 
                       text-3xl 
                       font-bold">
          Fitness Actions
        </h1>
        <h2 className="font-medium text-orange-400">
          Be the Best
        </h2>
      </section>
      <section>
  <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-blue-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      Task Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Deadline 
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                      Complete
                  </th>
              </tr>
          </thead>
          <tbody>
          {items.map((item, i) => {
            return (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap dark:text-white">
            {item.text}
           </th>
           <td className="px-6 py-4">
            {item.dueby}
           </td>
          <td className="px-6 py-4 items-center justify-center text-center">
              <Check item={item}/>
           </td>
              <td className="hidden">
            {item.id}
           </td>
           <td className="hidden">
            {item.ownerid}
           </td>
          </tr>
       )})}
          </tbody>
      </table>
         </div>
      </section>
      </main>
    );
  }
  