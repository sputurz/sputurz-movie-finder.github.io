import { useState } from 'react';

export function useAnimation(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  () => void
] {
  const [isMounted, setMounted] = useState(false);

  const handleExited = () => {
    setMounted(false);
  };

  return [isMounted, setMounted, handleExited];
}
