import Navigation from '@/components/molecules/Navigation';
import MobileNavigation from '@/components/molecules/MobileNavigation';
import Logo from '@/components/atoms/Logo';

export default function Header() {
  return (
    <div className="container sticky top-0 mx-auto flex items-center justify-between py-4">
      <Logo />
      <div className="max-md:hidden">
        <Navigation />
      </div>
      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </div>
  );
}
