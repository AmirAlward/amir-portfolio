// src/components/ui/NavItem.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavItemProps {
  to: string;
  label: string;
  isActive?: boolean;
}

export const NavItem = ({ to, label, isActive = false }: NavItemProps) => (
  <Link
    to={to}
    className="relative flex flex-col items-center py-0.5"
    aria-current={isActive ? 'page' : undefined}
  >
    <span
      className={`text-sm font-normal ${
        isActive ? 'text-black' : 'text-black/60 hover:text-black'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {label}
    </span>
    <motion.div
      className="h-px bg-black mt-1"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isActive ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ originX: 0 }}
    />
  </Link>
);