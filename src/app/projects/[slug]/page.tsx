import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/types/projects.md';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.href }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.href === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

function extractUrl(text: string): string | null {
  const match = text.match(/https?:\/\/[^\s.,)]+(?:\.[^\s.,)]+)*/);
  return match ? match[0] : null;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.href === slug);
  if (!project) notFound();

  const liveUrl = extractUrl(project.description);
  const cleanDescription = project.description
    .replace(/Checkout the website ->\s*https?:\/\/\S+/i, '')
    .trim();

  const currentIndex = projects.findIndex((p) => p.href === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen w-full flex flex-col items-center pt-32 pb-24">
      <div className="w-[85%] max-w-5xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-futura-medium text-lg w-fit transition-colors"
        >
          <ArrowLeft size={20} /> Back to projects
        </Link>
      </div>
      <div className="flex flex-col text-left w-[85%] max-w-5xl items-start justify-start gap-6">
        <h1 className="text-white w-full font-futura-condensed font-extrabold text-5xl md:text-8xl leading-none">
          {project.title}
        </h1>
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green px-5 py-2 text-gray rounded-full font-bold text-lg font-futura-condensed hover:underline w-fit"
          >
            VISIT LIVE SITE
          </Link>
        )}
      </div>
      <ContainerScroll
          titleComponent={
            <></>
          }
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            height={720}
            width={1400}
            priority
            draggable={false}
            className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          />
        </ContainerScroll>

      <article className="w-[85%] max-w-5xl flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <h2 className="text-white font-futura-condensed font-extrabold text-3xl md:text-4xl">
            ABOUT THIS PROJECT
          </h2>
          <p className="text-gray-400 font-futura-medium text-xl leading-relaxed">
            {cleanDescription}
          </p>
        </section>

        <section className="border-t border-white/10 pt-12 flex justify-between items-center gap-4">
          <Link
            href="/projects"
            className="text-gray-400 hover:text-white font-futura-medium text-lg transition-colors"
          >
            ← All projects
          </Link>
          <Link
            href={`/projects/${next.href}`}
            className="text-right text-white hover:text-pink font-futura-condensed font-extrabold text-2xl md:text-3xl transition-colors"
          >
            Next: {next.title} →
          </Link>
        </section>
      </article>
    </main>
  );
}
