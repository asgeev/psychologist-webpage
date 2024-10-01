import Section from '@/components/molecules/Section';
import ContactItem from '@/components/atoms/ContactItem';
import { AtSign, Facebook, Linkedin, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import Map from '@/components/atoms/Map';

export default function Contact() {
  return (
    <Section title={'Kontakt'} id="kontakt">
      <div className="max-lg:space-y-6 lg:grid lg:grid-cols-7 lg:gap-4">
        <div className="space-y-6 lg:col-span-3">
          <ContactItem title={'Telefon'}>
            <p>
              Zadzwoń lub napisz w godz. 9 - 17, <span className="text-nowrap">pon. - pt.</span>
            </p>
            <div className="flex gap-2">
              <PhoneCall />
              <p>+ 48 537 379 823</p>
            </div>
          </ContactItem>

          <ContactItem title={'Email'}>
            <div className="flex gap-2">
              <AtSign />
              <p>ewa-szymczyk@outlook.com</p>
            </div>
          </ContactItem>

          <ContactItem title={'Media społecznościowe'}>
            <div className="space-y-2">
              <p>Możesz mnie złapać również w sieci</p>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com/profile.php?id=61565095545410">
                  <Facebook className="md:h-8 md:w-8" />
                </Link>
                <Link href="https://www.linkedin.com/in/ewa-szymczyk-a03a94a7/">
                  <Linkedin className="md:h-8 md:w-8" />
                </Link>
              </div>
            </div>
          </ContactItem>

          <ContactItem title={'Adres gabinetu'}>
            <p>ul. Kaprysowa 1, 20-843 Lublin </p>
          </ContactItem>
        </div>
        <div className="lg:col-span-4 lg:col-start-4">
          <Map className="w-full max-lg:aspect-video lg:h-full" />
        </div>
      </div>
    </Section>
  );
}
