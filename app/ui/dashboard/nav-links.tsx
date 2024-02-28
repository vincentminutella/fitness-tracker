import {
  CloudIcon,
  HomeIcon,
  Cog8ToothIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Account',
    href: '/dashboard/account',
    icon: Cog8ToothIcon,
  },
  { name: 'Actions', href: '/dashboard/actions', icon: BoltIcon },
  { name: 'Metrics', href: '/dashboard/metrics', icon: CloudIcon },
];

export default function NavLinks() {
  return (
    <div>
    <div className="hidden md:block">
      {links.map((link) => {
        if (link.name !== 'Home') {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          ); 
        }
      })}
  </div>
  <div className="space-x-24 px-2 flex justify-center md:hidden">
  {links.map((link) => {
    if (link.name !== 'Home') {
      const LinkIcon = link.icon;
      return (
        <Link
          key={link.name}
          href={link.href}
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <LinkIcon className="w-6" />
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ); 
    }
  })}
</div>
</div>
  );
}
