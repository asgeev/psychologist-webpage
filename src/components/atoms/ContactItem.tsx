import { PropsWithChildren } from 'react';

interface ContactItemProps extends PropsWithChildren {
  title: string;
}
export default function ContactItem(props: ContactItemProps) {
  return (
    <div>
      <h3 className="text- font-medium">{props.title}</h3>
      <div className="mt-2 space-y-2 text-muted-foreground">{props.children}</div>
    </div>
  );
}
