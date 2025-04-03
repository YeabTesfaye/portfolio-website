'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component has not mounted, return null to prevent hydration mismatch
  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  console.log(currentTheme);

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {currentTheme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
