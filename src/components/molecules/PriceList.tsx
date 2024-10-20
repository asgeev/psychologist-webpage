import Section from '@/components/molecules/Section';
import PriceItem from '@/components/atoms/PriceItem';

export default function PriceList() {
  return (
    <Section index={3} title="Cennik" id="cennik">
      <div className="space-y-2 md:max-w-2xl">
        <PriceItem name="Konsultacja psychologiczna" price="150 zł" />
        <PriceItem name="Poradnictwo psychologiczne" price="150 zł" />
        <PriceItem name="Mediacja rodzinna" price="od 200 zł" />
      </div>
    </Section>
  );
}
