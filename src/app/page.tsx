import Hero from '@/components/organisms/Hero';
import Call from '@/components/molecules/Call';
import AboutMe from '@/components/molecules/AboutMe';
import Services from '@/components/molecules/Services';
import PriceList from '@/components/molecules/PriceList';
import Faq from '@/components/molecules/Faq';
import Photos from '@/components/molecules/Photos';
import Contact from '@/components/molecules/Contact';
import Copyrights from '@/components/molecules/Copyrights';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-8 md:gap-12">
          <Call />
          <AboutMe />
          <Services />
          <PriceList />
          <Photos />
          <Faq />
          <Contact />
          <Copyrights />
        </div>
      </div>
    </div>
  );
}
