import React, { useState, useEffect } from 'react';
import '@styles/navbar.css'
import '@fontsource/lilita-one';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Inicio');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    let lastScrollTop = 0;

    const handleScroll = () => {
        const sections = ['Inicio', 'Proyectos', 'Sobre mí', 'Proceso', 'Contacto'];
        let currentSection = 'Inicio';

        const element = document.getElementById('section');

        sections.forEach( section => {
            if(element){
                const offset = element.offsetTop - window.scrollY;
    
                if(offset <= 50 && offset > -element.offsetHeight){
                    currentSection = section;
                }
            }
        });
        setActiveSection(currentSection);

        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Mostrar y ocultar el navbar basado en la dirección del desplazamiento
        const scrollTop = window.scrollY;
        if (scrollTop > lastScrollTop) {
            setIsHidden(true);  // Ocultar cuando el usuario desplaza hacia abajo
        } else {
            setIsHidden(false); // Mostrar cuando el usuario desplaza hacia arriba
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (section) => {
        setActiveSection(section);
        document.getElementById(section).scrollIntoView({behavior : 'smooth'})
    }

return (
    <nav className={`${isScrolled ? 'nav-scrolled' : ''} ${isHidden ? 'nav-hidden' : ''}`}>
        <ul className='flex'>
            {['Inicio', 'Proyectos', 'Sobre mí', 'Proceso', 'Contacto'].map((section) => (
                    <li
                    key={section}
                    className={`text-white text-xl rounded-lg px-4 ${
                    activeSection === section ? 'selected' : 'unselected'
                    }`}
                    onClick={() => handleClick(section)}
                    >
                        {section}
                    </li>
            ))}
        </ul>
    </nav>
)
}

export default Navbar
