'use client';

import { THEMES } from '@/lib/data';
import {
  ReactNode,
  useEffect,
  createContext,
  useState,
  useContext,
} from 'react';

// Define the Theme type based on THEMES object keys
type Theme = (typeof THEMES)[keyof typeof THEMES];

type ThemeContextProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(THEMES.LIGHT);

  const toggleTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);

    if (newTheme === THEMES.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme && Object.values(THEMES).includes(localTheme)) {
      setTheme(localTheme);
      document.documentElement.classList.toggle(
        'dark',
        localTheme === THEMES.DARK,
      );
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(THEMES.DARK);
      document.documentElement.classList.add('dark');
    } else {
      setTheme(THEMES.LIGHT);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used with in a contextProvider');
  }
};
