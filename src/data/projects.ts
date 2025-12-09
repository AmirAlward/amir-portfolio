// src/data/projects.ts
export interface Project {
  title: string;
  desc: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: '6-DOF Robotic Arm',
    desc: 'Kinematic modeling & real-time control using STM32 and ROS',
    year: '2024',
    image: 'https://placehold.co/600x450/e0e0e0/333333?text=Robotic+Arm',
  },
  {
    title: 'IoT Egg Incubator',
    desc: 'PID-controlled smart incubation with remote monitoring',
    year: '2023',
    image: 'https://placehold.co/600x450/e0e0e0/333333?text=Incubator',
  },
  {
    title: 'Semiconductor Tester',
    desc: 'High-accuracy parametric validation for analog ICs',
    year: '2025',
    image: 'https://placehold.co/600x450/e0e0e0/333333?text=Tester',
  },
  {
    title: 'Smart Rainwater System',
    desc: 'Automated harvesting, filtration, and usage analytics',
    year: '2023',
    image: 'https://placehold.co/600x450/e0e0e0/333333?text=Rainwater',
  },
];