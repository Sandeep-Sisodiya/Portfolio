export default function Footer() {
    return (
        <footer className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted">
                © {new Date().getFullYear()} Sandeep Sisodiya
            </p>
            <div className="flex gap-4">
                {[
                    { label: 'GitHub', url: 'https://github.com/sandeep' },
                    { label: 'LinkedIn', url: 'https://linkedin.com/in/sandeep' },
                    { label: 'Twitter', url: 'https://twitter.com/sandeep' },
                ].map(l => (
                    <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent transition-colors">
                        {l.label}
                    </a>
                ))}
            </div>
        </footer>
    )
}
