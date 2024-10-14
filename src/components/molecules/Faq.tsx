import Section from '@/components/molecules/Section';
import Card from '@/components/atoms/Card';

const questions = [
  {
    title: 'Ile trwa terapia?',
    description:
      'Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i grupowych oraz sesji terapeutycznych online.',
  },
  {
    title: 'Jakie są metody płatności?',
    description:
      'Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i grupowych oraz sesji terapeutycznych online.',
  },
  {
    title: 'Jak przygotować się do pierwszego spotkania?',
    description:
      'Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i grupowych oraz sesji terapeutycznych online.',
  },
  {
    title: 'Kto może umówić się na spotkanie?',
    description:
      'Zachęcam do zapoznania się z aktualnym cennikiem, gdzie znajdą Państwo szczegółowe informacje na temat kosztów konsultacji indywidualnych, psychoterapii indywidualnych i grupowych oraz sesji terapeutycznych online.',
  },
];

export default function Faq() {
  return (
    <Section index={5} title="FAQ" id="faq">
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        {questions.map((question, index) => {
          return (
            <Card key={index} title={question.title} index={index}>
              {question.description}
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
