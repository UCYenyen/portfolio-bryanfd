import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { requireUser } from '@/lib/auth';
import { deleteProjectAction, logoutAction } from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const user = await requireUser();
  const projects = await prisma.project.findMany({ orderBy: [{ order: 'asc' }, { id: 'asc' }] });

  return (
    <main className="min-h-screen w-full flex flex-col items-center pt-32 pb-24">
      <div className="w-[85%] max-w-5xl flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h1 className="text-white font-futura-condensed font-extrabold text-5xl md:text-7xl">PROJECTS</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-futura-medium">{user.username}</span>
            <Link href="/admin/projects/new" className="bg-green px-5 py-2 text-gray rounded-full font-bold text-lg font-futura-condensed hover:underline">
              + NEW
            </Link>
            <form action={logoutAction}>
              <button className="text-gray-400 hover:text-white font-futura-medium">Log out</button>
            </form>
          </div>
        </div>
        <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {projects.map((p) => (
            <li key={p.id} className="flex justify-between items-center gap-4 py-4">
              <div>
                <p className="text-white font-futura-condensed font-extrabold text-2xl">{p.title}</p>
                <p className="text-gray-400 font-futura-medium">/projects/{p.slug} · order {p.order}</p>
              </div>
              <div className="flex items-center gap-4">
                <Link href={`/admin/projects/${p.id}`} className="text-white hover:text-green font-futura-medium">Edit</Link>
                <form action={deleteProjectAction}>
                  <input type="hidden" name="id" value={p.id} />
                  <button className="text-gray-400 hover:text-pink font-futura-medium">Delete</button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
