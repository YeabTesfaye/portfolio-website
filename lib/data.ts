import eLearning from '@/public/eLearning.png';
import proStore from '@/public/prostore.png';
import ticketMgmt from '@/public/ticketmgmt.png';
import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { FaLaptopCode, FaUserSecret } from 'react-icons/fa';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Computer Science Graduate',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Graduated with a degree in Computer Science with distinction, gaining a strong foundation in algorithms, data structures, and software development.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Software Developer',
    location: 'Remote, Freelance',
    description:
      'Specialized in frontend development, leveraging Next.js to build responsive, high-performance, and visually appealing user interfaces.',
    icon: React.createElement(FaLaptopCode),
    date: '2023 - 2025',
  },
  {
    title: 'Penetration Tester',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Currently working as a full-stack developer and penetration tester at Ethiopian Airlines. Skilled in React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Open to full-time remote opportunities.',
    icon: React.createElement(FaUserSecret),
    date: '2024 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'Prostore',
    description:
      'A fully-fledged full-stack e-commerce platform with PayPal integration.',
    tags: ['React', 'Next.js', 'Tailwind', 'Prisma', 'TypeScript'],
    imageUrl: proStore,
    githubUrl: 'https://github.com/YeabTesfaye/prostore',
  },
  {
    title: 'E-Learning Platform',
    description: 'A comprehensive e-learning platform built using .NET.',
    tags: ['.NET', 'C#', 'Docker', 'SQL Server'],
    imageUrl: eLearning,
    githubUrl: 'https://github.com/YeabTesfaye/E-Learning-Platform',
  },
  {
    title: 'Ticket Tracking System',
    description:
      'A demo project for a Ticket Management System, designed to handle users, tickets, and workflows efficiently.',
    tags: ['React', 'MongoDB', 'Bootstrap', 'Node.js'],
    imageUrl: ticketMgmt,
    githubUrl: 'https://github.com/YeabTesfaye/E-Learning-Platform',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  '.NET',
  'C#',
  'MySql',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'PostgreSQL',
  'Python',
  'Framer Motion',
  'Docker',
  'AWS',
  'CI/CD',
  'Burp Suite',
] as const;
