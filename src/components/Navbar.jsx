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

    const sobreMiSections = ['experiencia', 'educations', 'teams', 'review'];
    const isSobreMiActive = sobreMiSections.includes(activeSection);

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
        <RxHamburgerMenu
        // ref={hamburgerRef}
        className={`toggle ${menuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        />
        <nav ref={navRef} className={`${isScrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <ul className={`container_ul_nav ${menuOpen ? 'open' : ''}`}>
            <li className={activeSection === 'inicio' ? 'selected' : 'unselected'} onClick={() => handleClick('inicio')}>Inicio</li>
            <li className={`menu ${isSobreMiActive ? 'selected' : 'unselected'}`}>
                <div className="flex items-center">
                    Sobre mí <IoIosArrowDropdownCircle className='arrow_icon pl-2 text-3xl'/>
                </div>
                <ul className={`subMenu rounded-none `}>
                    <li className={activeSection === 'experiencia' ? 'selected' : 'unselected'} onClick={() => handleClick('experiencia')}>Experiencia</li>
                    <li className={activeSection === 'educations' ? 'selected' : 'unselected'} onClick={() => handleClick('educations')}>Educación</li>
                    <li className={activeSection === 'teams' ? 'selected' : 'unselected'} onClick={() => handleClick('teams')}>Equipo</li>
                    <li className={activeSection === 'review' ? 'selected' : 'unselected'} onClick={() => handleClick('review')}>En cuanto...</li>
                </ul>
            </li>
            <li className={activeSection === 'proyectos' ? 'selected' : 'unselected'} onClick={() => handleClick('proyectos')}>Proyectos</li>
            <li className={activeSection === 'proceso' ? 'selected' : 'unselected'} onClick={() => handleClick('proceso')}>Proceso</li>
            <li className={activeSection === 'contacto' ? 'selected' : 'unselected'} onClick={() => handleClick('contacto')}>Contacto</li>
        </ul>
    </nav>
    </>
    
)
}

export default Navbar
