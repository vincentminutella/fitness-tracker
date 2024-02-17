import LoginForm from '@/app/ui/login-form';
import TrendUpLogo from '@/app/ui/trendup-logo'; 


export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="text-white hidden md:block">
            <TrendUpLogo />
          </div>
          <div className="md:w-36 text-white block md:hidden">
            <TrendUpLogo/>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}