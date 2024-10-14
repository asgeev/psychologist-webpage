import Card from '@/components/atoms/Card';
import Section from '@/components/molecules/Section';

export default async function Services() {
  const services = [
    {
      title: 'Konsultacja psychologiczna',
      description:
        'Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i grupowych oraz sesji terapeutycznych online.',
    },
    {
      title: 'Konsultacja psychologiczna',
      description:
        'Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i grupowych oraz sesji terapeutycznych online.',
    },
    {
      title: 'Konsultacja psychologiczna',
      description:
        'Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i grupowych oraz sesji terapeutycznych online.',
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
