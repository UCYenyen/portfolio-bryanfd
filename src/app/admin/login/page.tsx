'use client';

import { useActionState } from 'react';
import { loginAction } from '../actions';

const input = 'bg-gray text-white rounded-xl px-4 py-3 font-futura-medium outline-none focus:ring-2 focus:ring-green';

export default function LoginPage() {
  const [error, action, pending] = useActionState(loginAction, null);
  return (
    <main className="min-h-screen w-full flex items-center justify-center pt-32 pb-24">
      <form action={action} className="w-[85%] max-w-md flex flex-col gap-4">
        <h1 className="text-white font-futura-condensed font-extrabold text-5xl">ADMIN LOGIN</h1>
        <input name="identifier" placeholder="Username or email" autoComplete="username" required className={input} />
        <input name="password" type="password" placeholder="Password" autoComplete="current-password" required className={input} />
        {error && <p className="text-pink font-futura-medium">{error}</p>}
        <button disabled={pending} className="bg-green px-5 py-2 text-gray rounded-full font-bold text-lg font-futura-condensed hover:underline w-fit disabled:opacity-50">
          {pending ? 'SIGNING IN...' : 'SIGN IN'}
        </button>
      </form>
    </main>
  );
}
