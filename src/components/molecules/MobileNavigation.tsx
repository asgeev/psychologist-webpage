import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Navigation from '@/components/molecules/Navigation';
import Logo from '@/components/atoms/Logo';

export default function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="self-start">Psycholog Ewa Szymczyk</SheetDescription>
        </SheetHeader>
        <div className="mt-10">
          <Navigation variant="col" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
