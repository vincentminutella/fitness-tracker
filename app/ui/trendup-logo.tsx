import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';

export default function TrendUpLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      <ArrowUpRightIcon className="h-16 w-16 rotate-[15deg]" />
      <p className="text-5xl font-bold pl-8">TrendUp</p>
    </div>
  );
}
