import React, { useState, useEffect, useRef, useCallback } from 'react';
import '@styles/navbar.css'
import '@fontsource/lilita-one';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const activeSectionRef = useRef('inicio');

    // Manejo del efecto visual de scroll del navbar
    useEffect(() => {
        const handleScrollEffect = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScrollEffect, { passive: true });
        return () => window.removeEventListener('scroll', handleScrollEffect);
    }, []);

    // IntersectionObserver para detectar secciones visibles
    useEffect(() => {
        const sections = document.querySelectorAll('main section[id]');
        if (!sections.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -30% 0px', // Activa cuando el centro de section entra en viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            // Filtrar solo las intersections activas
            const visibleEntries = entries.filter(entry => entry.isIntersecting);

            if (visibleEntries.length > 0) {
                // Tomar la que está más arriba visiblemente
                const topmost = visibleEntries.reduce((top, current) => {
                    const topRect = top.target.getBoundingClientRect();
                    const currentRect = current.target.getBoundingClientRect();
                    return Math.abs(currentRect.top) < Math.abs(topRect.top) ? current : top;
                });

                const newSection = topmost.target.id;
                if (activeSectionRef.current !== newSection && !isScrolling) {
                    activeSectionRef.current = newSection;
                    setActiveSection(newSection);
                }
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [isScrolling]);

    // const sobreMiSections = ['experiencia', 'educations', 'teams', 'review'];
    // const isSobreMiActive = sobreMiSections.includes(activeSection);

    const handleClick = (section) => {
        setIsScrolling(true);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
            setActiveSection(section);
            setIsScrolling(false);
        }, 500);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navRef = useRef(null);
    // const hamburgerRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest('.toggle')) {
            setMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);


return (
    <>
      {/* MOBILE TOGGLE */}
      <RxHamburgerMenu
        className="lg:hidden fixed top-6 right-6 text-2xl text-white z-[60] cursor-pointer"
        onClick={toggleMenu}
      />

      {/* NAV */}
      <nav
        ref={navRef}
        className={`
          fixed top-6 left-1/2 -translate-x-1/4
          z-50
          hidden lg:flex
          transition-all duration-500
          px-8 py-4
          rounded-2xl
          ${isScrolled 
            ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
            : "bg-transparent"}
        `}
      >

        <ul className="flex items-center gap-8 text-lg font-medium whitespace-nowrap">

          {/* Inicio */}
          <li
            onClick={() => handleClick('inicio')}
            className={`cursor-pointer transition-all duration-300
              ${activeSection === 'inicio'
                ? "text-white"
                : "text-neutral-400 hover:text-white"}
            `}
          >
            Inicio
          </li>

          {/* Sobre Mi */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-2 whitespace-nowrap text-neutral-400 group-hover:text-white transition">
                <span>
                    Sobre mí
                </span>
              <IoIosArrowDropdownCircle className="transition-transform duration-300 group-hover:rotate-180" />
            </div>

            <ul className="absolute top-10 left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100
              transition-all duration-300
              bg-black/80 backdrop-blur-xl border border-white/10
              rounded-xl p-4 space-y-3 w-44
            ">

              {['experiencia','educations','teams','review'].map((item) => (
                <li
                  key={item}
                  onClick={() => handleClick(item)}
                  className={`cursor-pointer text-sm transition
                    ${activeSection === item
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"}
                  `}
                >
                  {item}
                </li>
              ))}

            </ul>
          </li>

          {/* Otros */}
          {['proyectos','proceso','contacto'].map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`cursor-pointer transition-all duration-300
                ${activeSection === item
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"}
              `}
            >
              {item}
            </li>
          ))}

        </ul>
      </nav>

      {/* MOBILE PANEL */}
      <div
        className={`
          fixed inset-0 z-50 bg-black/80 backdrop-blur-xl
          transform transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
          flex flex-col items-center justify-center gap-8 text-2xl
        `}
      >
        {['inicio','experiencia','educations','teams','review','proyectos','proceso','contacto'].map((item) => (
          <div
            key={item}
            onClick={() => {
              handleClick(item);
              setMenuOpen(false);
            }}
            className="text-neutral-300 hover:text-white cursor-pointer transition"
          >
            {item}
          </div>
        ))}
      </div>

    </>
    
)
}

export default Navbar
