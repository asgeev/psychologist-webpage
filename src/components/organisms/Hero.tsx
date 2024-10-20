import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CTAButton from '@/components/atoms/CTAButton';
import { MotionDiv } from '@/components/atoms/Motion';
import { ChevronsDown } from 'lucide-react';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'] });
const variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <Image
        src="/background.jpg"
        fill
        priority
        alt="Background"
        className="absolute -z-10 h-full w-full"
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute h-full w-full bg-gradient-to-b from-black opacity-15"></div>

      <div className="container z-20">
        <div className="flex flex-col items-center justify-center gap-10">
          <MotionDiv
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-full border border-muted-foreground p-1 drop-shadow-2xl">
              <div className="relative aspect-square h-44 md:h-52">
                <Image
                  src="/ewa.jpg"
                  fill
                  priority
                  alt="woman"
                  className="rounded-full"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </MotionDiv>
          <div className="mx-4 space-y-8 text-center">
            <MotionDiv
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl font-semibold">Cześć, jestem Ewa!</p>
            </MotionDiv>
            <MotionDiv
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1
                className={cn(
                  'text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl',
                  montserrat.className,
                )}
              >
                W czym mogę <br></br>
                <span className="w-min bg-primary px-2 text-secondary">pomóc?</span>
              </h1>
            </MotionDiv>
            <MotionDiv
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="mx-auto max-w-2xl text-lg font-medium">
                Jestem magistrem psychologii z kilkuletnim doświadczeniem i zajmuję się poradnictwem
                psychologicznym dla dzieci i młodzieży
              </p>
            </MotionDiv>
            <MotionDiv
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CTAButton />
            </MotionDiv>
          </div>

          <MotionDiv
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute bottom-2 animate-bounce"
          >
            <Link href="/#o-mnie">
              <ChevronsDown size={40} />
            </Link>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
