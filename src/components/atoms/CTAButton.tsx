import Link from 'next/link';
import { Button } from '../ui/button';
import { Redo } from 'lucide-react';

export default function CTAButton() {
  return (
    <Button className="rounded-full" size={'lg'} asChild>
      <Link href={'/#kontakt'}>
        Skontaktuj się
        <Redo className="ml-4 h-8 w-8" />
      </Link>
    </Button>
  );
}
