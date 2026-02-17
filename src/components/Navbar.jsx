import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)
            const sections = ['home', 'skills', 'projects', 'education', 'contact']
            const scrollPos = window.scrollY + 120
            for (const id of sections) {
                const el = document.getElementById(id)
                if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
                    setActiveSection(id)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Journey', href: '#education' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border-color' : 'bg-transparent'}`}>
            <div className="max-w-5xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
                <a href="#home" className="text-heading font-bold text-lg tracking-tight hover:text-accent transition-colors duration-200">
                    Sandeep<span className="text-accent">.</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {links.map(l => {
                        const id = l.href.replace('#', '')
                        return (
                            <a key={l.label} href={l.href} className={`text-sm font-medium transition-colors duration-200 ${activeSection === id ? 'text-accent' : 'text-body hover:text-heading'}`}>
                                {l.label}
                            </a>
                        )
                    })}
                </div>

                <button className="md:hidden text-body hover:text-heading transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        }
                    </svg>
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-bg border-b border-border-color">
                    <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3">
                        {links.map(l => (
                            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className={`text-sm font-medium py-1 transition-colors duration-200 ${activeSection === l.href.replace('#', '') ? 'text-accent' : 'text-body hover:text-heading'}`}>
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
