"use client";
import { useState } from 'react';
import Image from 'next/image';

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
                .sidebar.open {
                    transform: translateX(0);
                }
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
                    border-bottom: 1px solid transparent;
                }
                .sidebar-link:hover { color: #fff; }
                .sidebar-link.active { color: #fff; font-weight: 600; }
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
            `}</style>

            {/* Sidebar overlay */}
            <div
                className={`sidebar-overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                {/* Sidebar logo */}
                <div className="mb-8">
                    <Image src="/images/escape.png" alt="escape" width={80} height={24} className="object-contain" />
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-1 flex-1">
                    {NAV_LINKS.map(({ label, href }, i) => (
                        <a
                            key={label}
                            href={href}
                            className={`sidebar-link ${i === 0 ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* Bottom links */}
                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                    <a href="#support" className="sidebar-bottom-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/>
                        </svg>
                        Support
                    </a>
                    <a href="#settings" className="sidebar-bottom-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                        </svg>
                        Settings
                    </a>
                </div>
            </aside>

            {/* Header bar */}
            <header className="sticky top-0 left-0 right-0 z-50 bg-transparrent border-b border-white/5">
                <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">

                    {/* Left: Store button */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#store"
                            className="rounded-lg border border-white/60 px-4 py-2 text-xs font-semibold tracking-widest text-white transition-all hover:bg-white hover:text-black"
                        >
                            STORE
                        </a>
                    </div>

                    {/* Center: Logo */}
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Image src="/images/escape.png" alt="escape" width={100} height={28} className="object-contain" />
                    </div>

                    {/* Right: Menu toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-2 text-sm font-medium text-white"
                        aria-label="Toggle menu"
                    >
                        <span className="tracking-wide">Menu</span>
                        <div className="flex flex-col justify-center">
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