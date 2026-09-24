export default function Footer() {
    return (
        <footer className="max-w-5xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted">
                © {new Date().getFullYear()} Sandeep Sisodiya
            </p>
            <div className="flex gap-5">
                {[
                    { label: 'GitHub', url: 'https://github.com/Sandeep-Sisodiya' },
                    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sandeep-sisodiya-830114298/' },
                    { label: 'Twitter', url: 'https://x.com/Sandeep_18_26' },
                ].map(l => (
                    <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent transition-colors duration-200 font-medium">
                        {l.label}
                    </a>
                ))}
            </div>
        </footer>
    )
}
