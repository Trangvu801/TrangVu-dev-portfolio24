'use client'
import { useState, useEffect } from 'react';

export const Header = () => {
  const [active, setActive] = useState<string>('hero');

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();
    setActive(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const sections = ['hero', 'projects', 'about', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Check if the user is at the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setActive('contact');
      return;
    }

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActive(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#"
          className={`nav-item ${active === 'hero' ? 'nav-item-active' : ''}`}
          onClick={(event) => handleClick(event, 'hero')}
        >
          Home
        </a>
        <a
          href="#"
          className={`nav-item ${active === 'projects' ? 'nav-item-active' : ''}`}
          onClick={(event) => handleClick(event, 'projects')}
        >
          Projects
        </a>
        <a
          href="#"
          className={`nav-item ${active === 'about' ? 'nav-item-active' : ''}`}
          onClick={(event) => handleClick(event, 'about')}
        >
          About
        </a>
        <a
          href="#"
          className={`nav-item ${active === 'contact' ? 'nav-item-active' : ''}`}
          onClick={(event) => handleClick(event, 'contact')}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};