import Section from '@/components/molecules/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const questions = [
  {
    title: 'Jak przygotować się do pierwszego spotkania?',
    description:
      'Pierwsze spotkanie odbywa się z rodzicami/ opiekunami prawnymi dziecka. Zastanów się, dlaczego zdecydowaliście się na wizytę u psychologa. Czy chodzi o problemy emocjonalne, trudności w szkole, zmiany w zachowaniu, czy inne kwestie? Przygotuj informacje o zdrowiu fizycznym i psychicznym dziecka, w tym ewentualne diagnozy, wcześniejsze leczenie.  Ważna jest otwartość i gotowość do współpracy. Terapia dziecięca  wymaga zaangażowania zarówno dziecka, jak i rodziców.',
  },
  {
    title: 'Ile trwa spotkanie?',
    description:
      'Spotkanie trwa zazwyczaj około 50 minut. Pierwsze spotkanie jest spotkaniem zapoznawczym przy którym ustalmy',
  },
  {
    title: 'Jakie są metody płatności?',
    description: 'Obecnie płatność jest możliwa jedynie gotówką.',
  },
  {
    title: 'Kto może umówić się na spotkanie?',
    description: 'Rodzic, lub opiekun prawny dziecka/ nastolatka, którego dotyczyć ma konsultacja.',
  },
];

export default function Faq() {
  return (
    <Section index={5} title="FAQ" id="faq">
      <Accordion type="single" collapsible>
        {questions.map((question, index) => {
          return (
            <AccordionItem key={index} value={`question-${index}`}>
              <AccordionTrigger>{question.title}</AccordionTrigger>
              <AccordionContent>{question.description}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Section>
  );
}
