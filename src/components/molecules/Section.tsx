import { PropsWithChildren } from 'react';
import { MotionDiv } from '@/components/atoms/Motion';

interface SectionProps extends PropsWithChildren {
  index: number;
  title?: string;
  id?: string;
}

export default function Section(props: SectionProps) {
  const variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animation: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * props.index,
        duration: 0.4,
      },
    },
  };

  const variantsContent = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animation: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.4,
      },
    },
  };

  return (
    <MotionDiv
      variants={variants}
      initial="initial"
      whileInView="animation"
      viewport={{ once: true }}
      id={props.id}
    >
      {props.title && (
        <h1 className="mb-4 text-xl font-semibold md:mb-4 md:text-3xl">{props.title}</h1>
      )}
      <MotionDiv
        variants={variantsContent}
        initial="initial"
        whileInView="animation"
        viewport={{ once: true }}
      >
        {props.children}
      </MotionDiv>
    </MotionDiv>
  );
}
