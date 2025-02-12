import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
			<div className="absolute top-0 right-0 m-4 p-2 bg-gray-800 text-white rounded-lg">
				<h2 className="text-lg font-bold">For demo purposes</h2>
				<p>Login: user@nextmail.com</p>
				<p>Password: 123456</p>
			</div>
    </main>
  );
}