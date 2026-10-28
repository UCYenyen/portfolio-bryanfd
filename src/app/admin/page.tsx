import Image from 'next/image';
import Link from 'next/link';
import type { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { requireUser } from '@/lib/auth';
import { deleteProjectAction, logoutAction } from './actions';

export const dynamic = 'force-dynamic';

const PAGE_SIZE = 8;

type SearchParams = Promise<{ q?: string; page?: string }>;

function pageHref(q: string, page: number) {
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (page > 1) params.set('page', String(page));
  const qs = params.toString();
  return qs ? `/admin?${qs}` : '/admin';
}

export default async function AdminPage({ searchParams }: { searchParams: SearchParams }) {
  const user = await requireUser();
  const { q: rawQ = '', page: rawPage } = await searchParams;
  const q = rawQ.trim();

  const where: Prisma.ProjectWhereInput = q
    ? {
        OR: [
          { title: { contains: q, mode: 'insensitive' } },
          { slug: { contains: q, mode: 'insensitive' } },
          { description: { contains: q, mode: 'insensitive' } },
        ],
      }
    : {};

  const total = await prisma.project.count({ where });
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number(rawPage) || 1), totalPages);
  const projects = await prisma.project.findMany({
    where,
    orderBy: [{ order: 'asc' }, { id: 'asc' }],
    skip: (page - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  });

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

        <form action="/admin" className="flex flex-wrap gap-3">
          <input
            name="q"
            defaultValue={q}
            placeholder="Search title, slug or description…"
            className="flex-1 min-w-0 bg-gray text-white rounded-xl px-4 py-3 font-futura-medium outline-none focus:ring-2 focus:ring-green"
          />
          <button className="bg-green px-5 py-2 text-gray rounded-full font-bold text-lg font-futura-condensed hover:underline">
            SEARCH
          </button>
          {q && (
            <Link href="/admin" className="self-center text-gray-400 hover:text-white font-futura-medium">
              Clear
            </Link>
          )}
        </form>

        <p className="text-gray-400 font-futura-medium">
          {total === 0
            ? q
              ? `No projects match "${q}".`
              : 'No projects yet.'
            : `Showing ${(page - 1) * PAGE_SIZE + 1}–${(page - 1) * PAGE_SIZE + projects.length} of ${total} project${total === 1 ? '' : 's'}${q ? ` for "${q}"` : ''}`}
        </p>

        {projects.length > 0 && (
          <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {projects.map((p) => (
              <li key={p.id} className="flex justify-between items-center gap-4 py-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="relative w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-gray">
                    <Image src={p.imageUrl} alt={p.title} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-futura-condensed font-extrabold text-2xl truncate">{p.title}</p>
                    <p className="text-gray-400 font-futura-medium truncate">/projects/{p.slug} · order {p.order}</p>
                  </div>
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
        )}

        {totalPages > 1 && (
          <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-2 font-futura-medium">
            {page > 1 ? (
              <Link href={pageHref(q, page - 1)} className="px-3 py-1 text-white hover:text-green">← Prev</Link>
            ) : (
              <span className="px-3 py-1 text-gray-600">← Prev</span>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={pageHref(q, n)}
                aria-current={n === page ? 'page' : undefined}
                className={`px-3 py-1 rounded-full ${n === page ? 'bg-green text-gray font-bold' : 'text-white hover:text-green'}`}
              >
                {n}
              </Link>
            ))}
            {page < totalPages ? (
              <Link href={pageHref(q, page + 1)} className="px-3 py-1 text-white hover:text-green">Next →</Link>
            ) : (
              <span className="px-3 py-1 text-gray-600">Next →</span>
            )}
          </nav>
        )}
      </div>
    </main>
  );
}
