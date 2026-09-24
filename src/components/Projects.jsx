import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
    {
        name: 'AI Therapy – Mental Wellness Companion',
        badge: 'Gemini Buildathon Winner',
        period: 'May 2025 – Present',
        desc: 'An AI-powered mental health companion designed to provide 24/7 personalized therapy support with a focus on accessibility and emotional well-being.',
        tech: ['Flutter', 'Gemini API', 'Dart', 'Cloud Firestore', 'GetX', 'Material Design UI'],
        features: [
            'Dynamic 3,500+ word prompt encoding CBT + DBT frameworks',
            '24/7 adaptive, emotion-aware conversations',
            'Winner of Gemini & Firebase Studio Buildathon',
            'Secure authentication & Cloud Firestore sync',
        ],
        github: 'https://github.com/Sandeep-Sisodiya/AI_Therapy-Dr.-Savi-',
        icon: '🧠',
    },
    {
        name: 'DevTrack – Full-Stack Project Management',
        badge: 'Full-Stack & CI/CD',
        period: 'Jul 2026 – Sep 2026',
        desc: 'Full-stack project and workflow management platform featuring Kanban task tracking, JWT security, and automated CI/CD pipelines.',
        tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'GitHub Actions', 'JWT', 'REST APIs'],
        features: [
            '10+ RESTful API endpoints for auth, tasks & resources',
            'JWT authentication, bcrypt hashing & 2 core CRUD modules',
            'Kanban-style task tracking & 4+ live dashboard metrics',
            'Docker containerization & automated CI/CD pipelines',
        ],
        github: 'https://github.com/Sandeep-Sisodiya',
        icon: '📊',
    },
    {
        name: 'Backtrack – Real-Time GPS Route Tracking',
        badge: '500+ Users Supported',
        period: 'May 2025 – Aug 2025',
        desc: 'Real-time GPS route tracking and navigation system with high-precision tracking, local offline storage, and path sharing.',
        tech: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Maps API', 'SQLite', 'Geolocator'],
        features: [
            'Real-time path tracking with 5-meter accuracy',
            'Unlimited local offline storage via SQLite',
            'Path export & sharing as image files with history logging',
            'Optimized architecture supporting 500+ concurrent users',
        ],
        github: 'https://github.com/Sandeep-Sisodiya/Back-Track-App',
        icon: '📍',
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
                <p className="section-desc">Real-world applications built with clean architecture, modern APIs, and robust engineering.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 14 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.05 + i * 0.1 }}
                        className="card flex flex-col justify-between space-y-4"
                    >
                        <div className="space-y-4">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{project.icon}</span>
                                    <div>
                                        <h3 className="text-base font-bold text-heading tracking-tight leading-snug">{project.name}</h3>
                                        <p className="text-xs text-muted font-mono mt-0.5">{project.period}</p>
                                    </div>
                                </div>
                            </div>

                            {project.badge && (
                                <div>
                                    <span className="inline-block text-[11px] font-semibold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                                        {project.badge}
                                    </span>
                                </div>
                            )}

                            <p className="text-sm text-body leading-relaxed">{project.desc}</p>

                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                            </div>

                            <div className="pt-2 border-t border-border-color/60">
                                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Key Highlights</p>
                                <ul className="space-y-1.5">
                                    {project.features.map(f => (
                                        <li key={f} className="flex items-start gap-2 text-xs text-body">
                                            <svg className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-3 border-t border-border-color/60">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 font-medium"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View on GitHub →
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

