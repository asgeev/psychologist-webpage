interface PriceItemProps {
  name: string;
  price: string;
}

export default function PriceItem(props: PriceItemProps) {
  return (
    <div className="flex flex-row justify-between text-muted-foreground">
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}
