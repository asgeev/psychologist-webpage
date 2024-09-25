import Section from '@/components/molecules/Section';
import PriceItem from '@/components/atoms/PriceItem';

export default function PriceList() {
  return (
    <Section title="Cennik">
      <div className="space-y-2 md:max-w-2xl">
        <PriceItem name="Konsultacja psychologiczna" price="150 zł" />
        <PriceItem name="Poradnictwo psychologiczne" price="150 zł" />
        <PriceItem name="Mediacja" price="od 200 zł" />
      </div>
    </Section>
  );
}
