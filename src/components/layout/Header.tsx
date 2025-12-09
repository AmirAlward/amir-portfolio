// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { NavItem } from '@/components/ui/NavItem';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Projects');

  useEffect(() => {
    if (location.pathname === '/') setActiveTab('Projects');
    else if (location.pathname === '/about') setActiveTab('About');
    // Add '/contact' if standalone page; else '#contact' scroll
  }, [location.pathname]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Left: Name */}
        <div className="text-lg font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
          Amir Al-Ward
        </div>

        {/* Right: Nav + CTA */}
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <NavItem to="/" label="Projects" isActive={activeTab === 'Projects'} />
            <NavItem to="/about" label="About" isActive={activeTab === 'About'} />
            {/* If you prefer anchor scroll: */}
            <button
              onClick={scrollToContact}
              className="text-sm text-black/60 hover:text-black font-normal"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact
            </button>
          </nav>
          <Button
            href="#contact"
            variant="primary"
            icon={Mail}
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
            aria-label="Contact via email"
          />
        </div>
      </div>
    </header>
  );
};