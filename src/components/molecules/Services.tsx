import Card from '@/components/atoms/Card';
import Section from '@/components/molecules/Section';

export default async function Services() {
  const services = [
    {
      title: 'Konsultacja psychologiczna',
      description:
        'Spotkanie, którego celem jest zrozumienie problemu pacjenta i wstępna ocena jego sytuacji. Jest to forma krótkotrwałej pomocy. Podczas konsultacji staram się zebrać jak najwięcej informacji na temat trudności, z jakimi zmaga się pacjent, aby móc zaproponować odpowiednie wsparcie lub dalsze kroki.',
    },
    {
      title: 'Poradnictwo psychologiczne',
      description:
        'Forma wsparcia psychologicznego skierowana do osób, które potrzebują pomocy w radzeniu sobie z trudnościami życiowymi, emocjonalnymi lub relacyjnymi. Skupia się na bieżących trudnościach, takich jak problemy z relacjami, trudności w szkole, stres czy wątpliwości dotyczące ważnych życiowych decyzji.',
    },
    {
      title: 'Mediacja rodzinna',
      description:
        'Proces, w którym neutralna i bezstronna osoba, zwana mediatorem, pomaga członkom rodziny w rozwiązaniu konfliktów lub sporów, bez konieczności angażowania sądu. Mediacja ma na celu umożliwienie stronom dialogu, wypracowanie wspólnych rozwiązań i osiągnięcie porozumienia, które będzie satysfakcjonujące dla wszystkich zaangażowanych osób.',
    },
  ];

  return (
    <Section index={2} title="Co oferuję?" id="oferta">
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {services.map((service, index) => {
          return (
            <Card key={index} title={service.title} index={index}>
              {service.description}
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
