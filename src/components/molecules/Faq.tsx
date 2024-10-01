import Section from '@/components/molecules/Section';
import Card from '@/components/atoms/Card';

export default function Faq() {
  return (
    <Section title="FAQ" id="faq">
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        <Card title="Ile trwa terapia?">
          Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe
          informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i
          grupowych oraz sesji terapeutycznych online.
        </Card>
        <Card title="Jakie są metody płatności?">
          Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe
          informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i
          grupowych oraz sesji terapeutycznych online.
        </Card>
        <Card title="Jak przygotować się do pierwszego spotkania?">
          Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe
          informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i
          grupowych oraz sesji terapeutycznych online.
        </Card>
        <Card title="Kto może umówić się na spotkanie?">
          Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe
          informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i
          grupowych oraz sesji terapeutycznych online.
        </Card>
      </div>
    </Section>
  );
}
