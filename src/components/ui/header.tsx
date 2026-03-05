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
                .sidebar-bottom-link {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #888;
                    font-size: 0.875rem;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                .sidebar-bottom-link:hover { color: #fff; }
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

                {/* <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                    <a href="#support" className="sidebar-bottom-link" onClick={close}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/>
                        </svg>
                        Support
                    </a>
                    <a href="#settings" className="sidebar-bottom-link" onClick={close}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                        </svg>
                        Settings
                    </a>
                </div> */}
            </aside>

            {/* header bar */}
            <header className={`fixed top-0 left-0 right-0 z-50 border-b' : 'bg-transparent'}`}>
                <nav className="mx-auto flex flex-row-reverse h-16 max-w-7xl items-center justify-between px-6 lg:px-10">

                    <div className="flex items-center gap-4">
                        <a
                            href="/merchandise"
                            className="rounded-lg border border-white/60 px-5 py-3 text-xs font-semibold tracking-widest text-white transition-all hover:bg-white hover:text-black"
                        >
                            OUR MERCH
                        </a>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Escape />
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className="flex items-center gap-2 text-sm font-medium text-white"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="tracking-wide">Menu</span>
                        <div className={`flex flex-col justify-center ${isMenuOpen ? 'hamburger-open' : ''}`}>
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                        </div>
                    </button>
                </nav>
            </header>
        </>
    );
}