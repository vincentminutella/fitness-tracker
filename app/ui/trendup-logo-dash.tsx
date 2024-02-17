import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';

export default function TrendUpLogoDash() {
  return (
    <div
      className={`${inter.className} flex leading-none text-white`}
    >
      <p className="text-5xl font-bold hidden md:block">TrendUp</p>
      <p className="text-5xl font-bold block md:hidden">TrendUp</p>
    </div>
  );
}
