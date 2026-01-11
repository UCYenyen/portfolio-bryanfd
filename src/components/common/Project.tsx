import Image from 'next/image'
import projectInterface from '@/types/projects.md'
export default function Project({ title, imageUrl, description }: projectInterface) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative w-full aspect-square rounded-xl overflow-hidden shadow-lg'>
        <Image
          src={imageUrl}
          alt={title}
          draggable={false}
          loading='lazy'
          fill 
          className='object-cover object-center' style={{borderRadius: '0.75rem'}}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h3 className='text-white font-futura-condensed font-extrabold text-4xl'>{title}</h3>
      <p className='text-gray-400 font-futura-medium text-xl w-[90%]'>
        {description.split(' ').length > 20
          ? description.split(' ').slice(0, 20).join(' ') + '...'
          : description}
      </p>
    </div>
  )
}
