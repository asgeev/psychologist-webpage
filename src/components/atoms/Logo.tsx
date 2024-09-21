import Image from 'next/image';

export default function Logo() {
  return <Image src="/logo.png" width={40} height={40} alt="Logo image" quality={100} priority />;
}
