import React, { useState, useEffect } from 'react';
import '@styles/navbar.css'
import '@fontsource/lilita-one';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Inicio');
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const sections = ['Inicio', 'Sobre mí', 'Proyectos', 'Proceso', 'Contacto'];
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
    <nav className={`${isScrolled ? 'nav-scrolled' : ''}`}>
        <ul className='flex'>
            {['Inicio', 'Sobre mí', 'Proyectos', 'Proceso', 'Contacto'].map((section) => (
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
