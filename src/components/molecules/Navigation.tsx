import NavLink from '@/components/atoms/NavLink';
import { cn } from '@/lib/utils';

type TNavigation = {
  variant?: 'row' | 'col';
};

export default function Navigation(props: TNavigation) {
  const variantClass = () => {
    const rowClass = 'flex-row gap-8';
    const colClass = 'flex-col gap-4';
    if (props.variant === 'col') {
      return colClass;
    }
    return rowClass;
  };

  return (
    <div className={cn('flex', variantClass())}>
      <NavLink href="/#o-mnie">O mnie</NavLink>
      <NavLink href="/#oferta">Oferta</NavLink>
      <NavLink href="/#cennik">Cennik</NavLink>
      <NavLink href="/#faq">Faq</NavLink>
      <NavLink href="/#kontakt">Kontakt</NavLink>
    </div>
  );
}
