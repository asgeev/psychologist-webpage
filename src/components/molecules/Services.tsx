import Card from '@/components/atoms/Card';
import Section from '@/components/molecules/Section';

export default function Services() {
  return (
    <Section title="Co oferuję?" id="oferta">
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        <Card title="Konsultacja psychologiczna">
          Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe
          informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i
          grupowych oraz sesji terapeutycznych online.
        </Card>
        <Card title="Konsultacja psychologiczna">
          Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe
          informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i
          grupowych oraz sesji terapeutycznych online.
        </Card>
        <Card title="Konsultacja psychologiczna">
          Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe
          informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i
          grupowych oraz sesji terapeutycznych online.
        </Card>
      </div>
    </Section>
  );
}
