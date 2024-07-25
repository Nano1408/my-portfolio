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

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        if (!isScrolling) {
            const sections = document.querySelectorAll('section');
            let currentSection = activeSection;

            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const topVisible = rect.top >= 0 && rect.top <= window.innerHeight / 2;
                    const bottomVisible = rect.bottom >= window.innerHeight / 2 && rect.bottom <= window.innerHeight;

                    if (topVisible || bottomVisible) {
                        currentSection = section.id;
                    }
                }
            });

            // Si estamos en la parte superior de la página
            if (window.scrollY === 0 || window.scrollY < 250) {
                currentSection = 'inicio';
            }

            setActiveSection(currentSection);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolling]);

    useEffect(() => {
        // Verificar si estamos en el inicio al cargar la página
        if (window.scrollY === 0) {
            setActiveSection('inicio');
        }
    }, []);

    const handleClick = (section) => {
        setIsScrolling(true);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
            setActiveSection(section);
            setIsScrolling(false);
        }, 500); // Ajusta el tiempo para que coincida con la duración de la animación de desplazamiento
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (
            navRef.current &&
            !navRef.current.contains(event.target) &&
            !hamburgerRef.current.contains(event.target)
            ) {
            setMenuOpen(false);
            }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


return (
    <>
        <RxHamburgerMenu 
        className={`toggle ${menuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        />
        <nav ref={navRef} className={`${isScrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <ul className={`container_ul_nav ${menuOpen ? 'open' : ''}`}>
            <li className={activeSection === 'inicio' ? 'selected' : 'unselected'} onClick={() => handleClick('inicio')}>Inicio</li>
            <li className="menu">
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
