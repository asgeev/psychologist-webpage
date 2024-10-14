import Image from 'next/image';
import { cn } from '@/lib/utils';
import Section from '@/components/molecules/Section';

export default function Photos() {
  const images = [
    {
      src: '/room_1.jpg',
      class: 'row-span-4',
    },
    {
      src: '/room_2.jpg',
      class: 'row-span-4 col-start-1 row-start-5',
    },
    {
      src: '/room_3.jpg',
      class: 'row-span-4 col-start-2 row-start-2',
    },
    {
      src: '/room_4.jpg',
      class: 'row-span-4 col-start-2 row-start-6',
    },
  ];

  return (
    <Section index={4}>
      <div className="max-sm:space-y-4 sm:grid sm:grid-cols-2 sm:grid-rows-9 sm:gap-4">
        {images.map((image, index) => {
          return (
            <div key={index} className={cn('relative aspect-video', image.class)}>
              <Image
                src={image.src}
                fill
                alt={`Photo ${index}`}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
