import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CTAButton from '@/components/atoms/CTAButton';
import { MotionDiv, MotionP } from '@/components/atoms/Motion';

const montserrat = Montserrat({ subsets: ['latin'] });
const variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};
export default function Hero() {
  return (
    <div className="relative h-[700px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Image
        src="/background.jpg"
        fill
        quality={90}
        priority
        alt="Backgound"
        className="absolute top-0 -z-10 h-full w-full"
        style={{ objectFit: 'cover' }}
      />
      <div className="container relative mx-auto h-full">
        <div className="absolute bottom-0 right-0">
          <MotionDiv
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.9 }}
            className="relative aspect-square h-72 min-[480px]:h-96 sm:h-72 md:h-[430px] lg:h-[500px] xl:h-[600px]"
          >
            <Image src="/woman.png" fill alt="woman" style={{ objectFit: 'cover' }} />
          </MotionDiv>
        </div>
        <div className="mx-4 pt-24 xl:pt-32">
          <div className="container mx-auto flex flex-col justify-between">
            <MotionDiv
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7 }}
              className="max-w-sm space-y-4 md:max-w-md lg:max-w-xl xl:max-w-3xl"
            >
              <p className="font-medium text-muted-foreground">Cześć, jestem Ewa!</p>
              <h1
                className={cn(
                  'text-4xl font-bold tracking-wide md:text-6xl lg:text-7xl xl:text-8xl',
                  montserrat.className,
                )}
              >
                W czym mogę pomóc?
              </h1>
              <MotionP
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Jestem magistrem psychologii z kilkuletnim doświadczeniem i zajmuję się poradnictwem
                psychologicznym dla dzieci i młodzieży
              </MotionP>
              <MotionDiv
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <CTAButton />
              </MotionDiv>
            </MotionDiv>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
