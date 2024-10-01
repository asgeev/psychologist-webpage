'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useNav() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  //Close mobile navigation on nav link click
  useEffect(() => {
    setIsOpen(false);
  }, [params]);

  return { isOpen, setIsOpen };
}
