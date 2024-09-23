import Navigation from '@/components/molecules/Navigation';
import MobileNavigation from '@/components/molecules/MobileNavigation';
import Logo from '@/components/atoms/Logo';

export default function Header() {
  return (
    <div className="fixed top-0 z-20 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <div className="max-md:hidden">
            <Navigation />
          </div>
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}
