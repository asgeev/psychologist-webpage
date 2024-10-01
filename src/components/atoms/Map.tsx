import { cn } from '@/lib/utils';

interface MapProps {
  className?: string;
}

export default function Map(props: MapProps) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.144063319566!2d22.545930269732345!3d51.263710998234956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472259e333122b87%3A0xed0f6a3bd76aa633!2sKaprysowa%201%2C%2020-843%20Lublin!5e0!3m2!1spl!2spl!4v1727809572995!5m2!1spl!2spl"
      className={cn(props.className)}
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
