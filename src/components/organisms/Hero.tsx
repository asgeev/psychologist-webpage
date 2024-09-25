import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CTAButton from '@/components/atoms/CTAButton';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Hero() {
  return (
    <div className="relative h-[700px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Image
        src="/background.jpg"
        fill
        quality={90}
        alt="Backgound"
        className="absolute top-0 -z-10 h-full w-full"
        style={{ objectFit: 'cover' }}
      />
      <div className="container relative mx-auto h-full">
        <div className="absolute bottom-0 right-0">
          <div className="relative aspect-square h-72 min-[480px]:h-96 sm:h-72 md:h-[430px] lg:h-[500px] xl:h-[600px]">
            <Image src="/woman.png" fill alt="woman" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="mx-4 pt-24 xl:pt-32">
          <div className="container mx-auto flex flex-col justify-between">
            <div className="max-w-sm space-y-4 md:max-w-md lg:max-w-xl xl:max-w-3xl">
              <p className="font-medium text-muted-foreground">Cześć, jestem Ewa!</p>
              <h1
                className={cn(
                  'text-4xl font-bold tracking-wide md:text-6xl lg:text-7xl xl:text-8xl',
                  montserrat.className,
                )}
              >
                W czym mogę pomóc?
              </h1>
              <p>
                Jestem magistrem psychologii z kilkuletnim doświadczeniem i zajmuję się poradnictwem
                psychologicznym dla dzieci i młodzieży
              </p>
              <CTAButton />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
