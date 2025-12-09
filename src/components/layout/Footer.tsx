// src/components/layout/Footer.tsx
import { NavItem } from './components/ui/NavItem.tsx';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-4">
        <p
          className="text-gray-600 text-sm"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          © {new Date().getFullYear()} Amir Al-Ward
        </p>
        <div className="flex gap-6">
          <NavItem to="/" label="Projects" />
          <NavItem to="/about" label="About" />
          <a
            href="mailto:hello@amiralward.com"
            className="text-sm text-black/60 hover:text-black font-normal"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            hello@amiralward.com
          </a>
        </div>
      </div>
    </footer>
  );
};