"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Escape from '../icons/escape';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Offline', href: '/offline' },
    { label: 'Online', href: '/online' },
    { label: 'Merchandise', href: '/merchandise' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setIsMenuOpen(false);

    return (
        <>
            <style>{`
                .sidebar {
                    position: fixed;
                    top: 0; left: 0;
                    height: 100vh;
                    width: 272px;
                    background: #000;
                    z-index: 100;
                    transform: translateX(-100%);
                    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
                    display: flex;
                    flex-direction: column;
                    padding: 32px 24px 32px;
                    border-right: 1px solid rgba(255,255,255,0.08);
                }
                .sidebar.open { transform: translateX(0); }
                .sidebar-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.5);
                    z-index: 99;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                }
                .sidebar-overlay.open {
                    opacity: 1;
                    pointer-events: auto;
                }
                .sidebar-link {
                    display: block;
                    padding: 12px 0;
                    font-size: 1rem;
                    font-weight: 400;
                    color: #b0b3b8;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                .sidebar-link:hover { color: #fff; }
                .sidebar-link.active { color: #fff; font-weight: 700; }
                .hamburger-line {
                    display: block;
                    width: 20px;
                    height: 1.5px;
                    background: white;
                    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease;
                    transform-origin: center;
                }
                .hamburger-line:nth-child(2) { margin: 4px 0; }
                .hamburger-open .hamburger-line:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
                .hamburger-open .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
                .hamburger-open .hamburger-line:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }
            `}</style>

            {/* overlay */}
            <div
                className={`sidebar-overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={close}
            />

            {/* sidebar */}
            <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <div className="mb-8">
                    <Image src="/images/escape.png" alt="escape" width={80} height={24} className="object-contain" />
                </div>

                <nav className="flex flex-col gap-1 flex-1">
                    {NAV_LINKS.map(({ label, href }) => {
                        const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
                        return (
                            <a
                                key={label}
                                href={href}
                                className={`sidebar-link ${isActive ? 'active' : ''}`}
                                onClick={close}
                            >
                                {label}
                            </a>
                        );
                    })}
                </nav>
            </aside>

            {/* header bar (Compact Dynamic Island Wrapper) */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <header 
                    className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        scrolled 
                            // Changed to max-w-lg (shorter width) and kept rounded-[16px]
                            ? 'mt-5 w-[calc(100%-3.5rem)] max-w-md bg-black/70 backdrop-blur-md border border-white/10 shadow-2xl rounded-[16px]' 
                            : 'mt-0 w-full max-w-7xl bg-transparent border-transparent rounded-none'
                    }`}
                >
                    <nav className={`relative flex flex-row-reverse w-full items-center justify-between transition-all duration-500 ${
                        // Changed to h-12 (more compact height) and px-5 (tighter padding)
                        scrolled ? 'h-15 px-10' : 'h-20 px-6 lg:px-10'
                    }`}>

                        <div className="absolute left-1/2 -translate-x-1/2 transition-transform duration-500">
                            {/* Adding a slight scale down on scroll to fit the tighter height perfectly */}
                            <div className={`${scrolled ? 'scale-90' : 'scale-100'} transition-transform duration-500 origin-center`}>
                                <Escape />
                            </div>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className="flex items-center gap-2 font-medium text-white transition-opacity hover:opacity-80"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            {/* Adjusted text size to match the compact feel */}
                            <span className={`tracking-wide transition-all duration-500 ${scrolled ? 'text-xs' : 'text-sm'}`}>Menu</span>
                            <div className={`flex flex-col justify-center ${isMenuOpen ? 'hamburger-open' : ''}`}>
                                <span className="hamburger-line" />
                                <span className="hamburger-line" />
                                <span className="hamburger-line" />
                            </div>
                        </button>

                    </nav>
                </header>
            </div>
        </>
    );
}