import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  title: string;
}

export default function Section(props: SectionProps) {
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold md:mb-4 md:text-3xl">{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}
