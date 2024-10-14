import { PropsWithChildren } from 'react';
import { MotionDiv } from '@/components/atoms/Motion';

interface CardProps extends PropsWithChildren {
  title: string;
  index: number;
}

export default function Card(props: CardProps) {
  const variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * props.index,
        duration: 0.4,
      },
    },
  };

  return (
    <MotionDiv
      key={props.index}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-200px' }}
      className="space-y-2"
    >
      <p className="font-medium">{props.title}</p>
      <p className="text-muted-foreground">{props.children}</p>
    </MotionDiv>
  );
}
