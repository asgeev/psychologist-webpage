import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  title: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="space-y-2">
      <p className="font-medium">{props.title}</p>
      <p className="text-muted-foreground">{props.children}</p>
    </div>
  );
}
