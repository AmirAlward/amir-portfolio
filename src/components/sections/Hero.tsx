// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Hero = () => {
  return (
    <section className="max-w-2xl mx-auto text-center pt-20 pb-16">
      <motion.div
        className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-2 border-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
      >
        <img
          src="/profile.jpg"
          alt="Amir Al-Ward"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://placehold.co/128/333333/ffffff?text=AA';
          }}
        />
      </motion.div>

      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.5px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Mechatronics & Embedded Systems Engineer
      </motion.h1>

      <motion.p
        className="text-gray-700 mb-8 max-w-prose"
        style={{ fontFamily: 'Inter, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Specialized in IoT-based smart automation, robotics, and semiconductor test solutions.
        <br />
        Alumnus focused on embedded control and real-time systems.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button href="https://linkedin.com/in/amiralward" icon={Linkedin}>
          LinkedIn
        </Button>
        <Button href="/resume.pdf" variant="secondary">
          Resume
        </Button>
      </motion.div>

      <motion.h2
        className="text-xl md:text-2xl font-medium text-black"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.25px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Click project photos below to learn more!
      </motion.h2>
    </section>
  );
};