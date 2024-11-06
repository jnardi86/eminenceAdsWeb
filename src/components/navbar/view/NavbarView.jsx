import React, { useState, useEffect } from 'react';
import HamburgerMenu from '../components/HamburguerMenu';
import NavbarDesktop from '../components/NavbarDesktop';
import NavbarMobile from '../components/NavbarMobile';


const NavbarView = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        // Bloquear scroll al abrir el menú en mobile
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);

    return (
        <nav className="bg-darkBlue text-white px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center hover:transform hover:scale-105 transition duration-1000 ease-in-out">
                    <img src='./images/logo.png' alt="Eminence Ads Logo" className="h-14 w-14 mx-1" />
                    <span className="text-2xl font-bold hidden md:block">Eminence</span>
                    <span className="text-2xl font-bold text-brightYellow hidden md:block">Ads</span>
                </div>
                {/* Menú Desktop */}
                <NavbarDesktop />
                {/* Menú Hamburguesa */}
                <HamburgerMenu
                    isOpen={isMobileMenuOpen}
                    toggleMenu={toggleMobileMenu}
                />
            </div>
            {/* Menú Mobile */}
            <NavbarMobile
                isOpen={isMobileMenuOpen}
            />
        </nav>
    );
};

export default NavbarView;
