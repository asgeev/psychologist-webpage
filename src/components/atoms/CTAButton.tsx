import Link from 'next/link';
import { Button } from '../ui/button';
import { Redo } from 'lucide-react';

export default function CTAButton() {
  return (
    <Button className="rounded-full md:h-14 md:px-12 md:text-lg" size={'lg'} asChild>
      <Link href={'/#kontakt'}>
        Skontaktuj się
        <Redo className="ml-4 h-8 w-8" />
      </Link>
    </Button>
  );
}
