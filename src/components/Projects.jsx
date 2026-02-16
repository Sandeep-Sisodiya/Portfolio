import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
    {
        name: 'AI Therapy App',
        desc: 'Gemini-powered mental health assistant with adaptive CBT/DBT conversations and personalized therapy sessions.',
        tech: ['Flutter', 'Gemini API', 'Firebase', 'Provider'],
        features: ['AI-powered conversations', 'CBT/DBT therapy modules', 'Progress tracking', 'Secure data encryption'],
        github: 'https://github.com/sandeep',
        icon: '🧠',
    },
    {
        name: 'Backtrack App',
        desc: 'Real-time path tracking application with offline storage and sharing capabilities. Supports 500+ concurrent users.',
        tech: ['Flutter', 'Geolocator', 'SQLite', 'Firebase'],
        features: ['Real-time GPS tracking', 'Offline data storage', 'Path sharing', '500+ active users'],
        github: 'https://github.com/sandeep',
        icon: '📍',
    },
    {
        name: 'Chat Application',
        desc: 'WhatsApp-like real-time messaging with <300ms latency. Features Firebase authentication and presence system.',
        tech: ['Flutter', 'Firebase', 'Firestore', 'Authentication'],
        features: ['Real-time messaging', 'User presence', 'Media sharing', 'End-to-end chat flow'],
        github: 'https://github.com/sandeep',
        icon: '💬',
    },
]

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <section id="projects" className="section" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
            >
                <span className="section-label">Projects</span>
                <h2 className="section-title">Featured Work</h2>
                <p className="section-desc">Projects that solve real problems with clean code and great UX</p>
            </motion.div>

            <div className="space-y-4">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 + i * 0.1 }}
                        className="card space-y-4"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-3">
                            <span className="text-xl mt-0.5">{project.icon}</span>
                            <div>
                                <h3 className="text-base font-semibold text-heading">{project.name}</h3>
                                <p className="text-sm text-body mt-1 leading-relaxed">{project.desc}</p>
                            </div>
                        </div>

                        {/* Tech */}
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map(t => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>

                        {/* Features */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {project.features.map(f => (
                                <li key={f} className="flex items-center gap-2 text-sm text-body">
                                    <svg className="w-3 h-3 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        {/* GitHub */}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View on GitHub →
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
