"use client";
import { useState } from 'react';
import LogoIcon from '../icons/logo';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Offline', href: '/offline' },
    { label: 'Online', href: '/online' },
    { label: 'Merchandise', href: '/merchandise' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <style>{`
                /* ── Dropdown slide-down only ── */
                .mobile-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    overflow: hidden;
                    transform-origin: top center;
                    transform: scaleY(0.92) translateY(-8px);
                    opacity: 0;
                    pointer-events: none;
                    transition:
                        transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                        opacity 0.25s ease;
                    z-index: 40;
                }
                .mobile-dropdown.open {
                    transform: scaleY(1) translateY(0);
                    opacity: 1;
                    pointer-events: auto;
                }

                /* ── Staggered items ── */
                .mobile-nav-item {
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }
                .mobile-dropdown.open .mobile-nav-item:nth-child(1) { opacity:1; transform:none; transition-delay: 0.06s; }
                .mobile-dropdown.open .mobile-nav-item:nth-child(2) { opacity:1; transform:none; transition-delay: 0.11s; }
                .mobile-dropdown.open .mobile-nav-item:nth-child(3) { opacity:1; transform:none; transition-delay: 0.16s; }
                .mobile-dropdown.open .mobile-nav-item:nth-child(4) { opacity:1; transform:none; transition-delay: 0.21s; }
                .mobile-dropdown.open .mobile-nav-item:nth-child(5) { opacity:1; transform:none; transition-delay: 0.26s; }
                .mobile-dropdown.open .mobile-nav-item:nth-child(6) { opacity:1; transform:none; transition-delay: 0.31s; }

                /* ── Hamburger ── */
                .hamburger-line {
                    display: block;
                    width: 22px;
                    height: 1.5px;
                    background: white;
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
                    transform-origin: center;
                }
                .hamburger-line:nth-child(2) { margin: 5px 0; }
                .hamburger.open .hamburger-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
                .hamburger.open .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
                .hamburger.open .hamburger-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

                /* ── Desktop nav underline ── */
                .nav-link {
                    position: relative;
                    font-size: 0.8125rem;
                    font-weight: 400;
                    color: #d1d5db;
                    letter-spacing: 0.01em;
                    transition: color 0.2s ease;
                    text-decoration: none;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px; left: 0;
                    width: 0; height: 1px;
                    background: white;
                    transition: width 0.25s ease;
                }
                .nav-link:hover { color: white; }
                .nav-link:hover::after { width: 100%; }

                /* ── Mobile row hover ── */
                .mobile-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 14px 20px;
                    border-radius: 10px;
                    color: #b0b3b8;
                    font-size: 1rem;
                    font-weight: 400;
                    text-decoration: none;
                    letter-spacing: 0.01em;
                    transition: background 0.18s ease, color 0.18s ease, padding-left 0.2s ease;
                }
                .mobile-row:hover {
                    background: rgba(255,255,255,0.06);
                    color: #ffffff;
                    padding-left: 26px;
                }
                .mobile-row.contact {
                    color: #ffffff;
                    font-weight: 600;
                    font-size: 1rem;
                    letter-spacing: 0.03em;
                }
                .mobile-row.contact:hover {
                    background: rgba(255,255,255,0.08);
                }
            `}</style>

            {/* header must be relative so the dropdown can use position:absolute top:100% */}
            <header className="sticky p-2 top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5">

                {/* ── Navbar ── */}
                <nav className="mx-auto flex h-17 max-w-7xl items-center justify-between px-6 lg:px-10">

                    {/* Logo */}
                    <div className="shrink-0 flex h-10 w-10 items-center justify-center">
                        <LogoIcon className="h-full w-full object-contain" />
                    </div>

                    {/* Desktop links — absolutely centered */}
                    <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                        {NAV_LINKS.map(({ label, href }) => (
                            <a key={label} href={href} className="nav-link">{label}</a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block shrink-0">
                        <a href="#contact" className="text-sm font-bold text-white tracking-wide transition-opacity hover:opacity-60" style={{ letterSpacing: '0.02em' }}>
                            Contact Us
                        </a>
                    </div>

                    {/* Hamburger — Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`hamburger ${isMenuOpen ? 'open' : ''} p-2 md:hidden flex flex-col justify-center`}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                    </button>
                </nav>

                {/* ── Mobile dropdown — slides DOWN from navbar bottom ── */}
                <div className={`mobile-dropdown ${isMenuOpen ? 'open' : ''} md:hidden bg-black border-t border-white/8 shadow-2xl`}>
                    <div className="px-4 pt-3 pb-5">

                        {/* Nav links */}
                        <div className="flex flex-col gap-1">
                            {NAV_LINKS.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="mobile-nav-item mobile-row"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="mobile-nav-item my-3 border-t border-white/10" />

                        {/* Contact Us */}
                        <a
                            href="#contact"
                            className="mobile-nav-item mobile-row contact"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

            </header>
        </>
    );
}