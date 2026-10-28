'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { saveProjectAction } from '../../actions';

type Initial = {
  id?: number;
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  images: string[];
  order: number;
};

const input = 'bg-gray text-white rounded-xl px-4 py-3 font-futura-medium outline-none focus:ring-2 focus:ring-green';
const label = 'flex flex-col gap-2 text-gray-400 font-futura-medium';

export default function ProjectForm({ initial }: { initial: Initial }) {
  const [error, action, pending] = useActionState(saveProjectAction, null);
  return (
    <form action={action} encType="multipart/form-data" className="flex flex-col gap-5">
      {initial.id && <input type="hidden" name="id" value={initial.id} />}
      <label className={label}>Title<input name="title" defaultValue={initial.title} required className={input} /></label>
      <label className={label}>Slug (URL)<input name="slug" defaultValue={initial.slug} required className={input} /></label>
      <label className={label}>Cover image (upload, auto-converted to WebP)<input name="coverFile" type="file" accept="image/*" className={input} /></label>
      <label className={label}>…or cover image URL<input name="imageUrl" defaultValue={initial.imageUrl} className={input} placeholder="/images/projects/foo.webp" /></label>
      <label className={label}>Add gallery images (upload, auto-converted to WebP)<input name="galleryFiles" type="file" accept="image/*" multiple className={input} /></label>
      <label className={label}>Gallery image URLs (one per line)<textarea name="images" defaultValue={initial.images.join('\n')} rows={4} className={input} /></label>
      <label className={label}>
        Description (blank line = new paragraph; end with &quot;Checkout the website -&gt; https://…&quot; for the live-site button)
        <textarea name="description" defaultValue={initial.description} required rows={14} className={input} />
      </label>
      <label className={label}>Order (lower shows first)<input name="order" type="number" defaultValue={initial.order} className={input} /></label>
      {error && <p className="text-pink font-futura-medium">{error}</p>}
      <div className="flex items-center gap-6">
        <button disabled={pending} className="bg-green px-5 py-2 text-gray rounded-full font-bold text-lg font-futura-condensed hover:underline disabled:opacity-50">
          {pending ? 'SAVING...' : 'SAVE'}
        </button>
        <Link href="/admin" className="text-gray-400 hover:text-white font-futura-medium">Cancel</Link>
      </div>
    </form>
  );
}
