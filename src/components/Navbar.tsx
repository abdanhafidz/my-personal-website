import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbar navbar-scrolled" : "navbar"} id="navbarScroll">
      <Link href="/" className = "navbar-brand">
        <img src="/logo.png" alt="Logo" />
      </Link>
      
      {/* Menu utama */}
      <div className="nav-link">
        <div className="nav-item"><Link href="#about">About Me</Link></div>
        <div className="nav-item"><Link href="#skills">Skills</Link></div>
        <div className="nav-item"><Link href="#portfolio">Portfolio</Link></div>
        <div className="nav-item"><Link href="#projects">Projects</Link></div>
        <div className="nav-item"><Link href="https://abdanhafidz.com/blog" target="_blank" rel="noreferrer">Blog</Link></div>
      </div>

      {/* Tombol hamburger untuk mobile */}
      <button onClick={() => setNavOpen(!navOpen)} className="hamburger-menu">☰</button>
      
      {/* Menu mobile */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="mobile-menu"
          >
            <div className="nav-item"><Link href="#about">About Me</Link></div>
            <div className="nav-item"><Link href="#skills">Skills</Link></div>
            <div className="nav-item">
              <button onClick={() => setSubNavOpen(!subNavOpen)}>Products</button>
            </div>
            <div className="nav-item"><Link href="#portfolio">Portfolio</Link></div>
            <div className="nav-item"><Link href="#projects">Projects</Link></div>
            <div className="nav-item"><Link href="https://abdanhafidz.com/blog" target="_blank" rel="noreferrer">Blog</Link></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
