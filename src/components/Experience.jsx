import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
    {
        role: 'Flutter Development Intern',
        company: 'Null Classes',
        period: 'Dec 2025 – Jan 2026',
        badge: 'Internship',
        highlights: [
            'Enhanced a WhatsApp-like chat application (initially built during training) by adding real-time messaging with <300ms latency, online presence status, and secure Firebase Authentication.',
            'Implemented advanced features and UI improvements, improving message delivery speed by ~30% and elevating the overall chat experience.',
        ],
        tech: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Real-time Messaging', 'State Management'],
        icon: '💬',
    },
    {
        role: 'Android Development Intern',
        company: 'OASIS Infobyte (AICTE Approved)',
        period: 'Jul 2025 – Aug 2025',
        badge: 'AICTE Approved',
        highlights: [
            'Developed 2 mobile applications (To-Do App, Quiz App) using Flutter, reducing average load time by 35%.',
            'Integrated secure Authentication with offline support for 80% of data operations.',
            'Designed responsive UIs improving user interaction by 40%, ensuring secure login for 100% of registered users and completing projects within 100% of deadlines.',
        ],
        tech: ['Flutter', 'Android', 'Dart', 'Authentication', 'Offline Storage', 'UI/UX Design'],
        icon: '📱',
    },
]

export default function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <section id="experience" className="section" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
            >
                <span className="section-label">Experience</span>
                <h2 className="section-title">Work Experience</h2>
                <p className="section-desc">Hands-on experience in mobile application engineering, real-time systems, and scalable UI architecture.</p>
            </motion.div>

            <div className="space-y-6">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={exp.company + exp.role}
                        initial={{ opacity: 0, y: 14 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.05 + i * 0.1 }}
                        className="card relative overflow-hidden"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl mt-0.5">{exp.icon}</span>
                                <div>
                                    <h3 className="text-lg font-bold text-heading tracking-tight">{exp.role}</h3>
                                    <p className="text-sm text-accent font-medium mt-0.5">{exp.company}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 sm:self-start">
                                <span className="text-xs font-mono text-muted bg-bg-light border border-border-color px-2.5 py-1 rounded-md whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-2.5 mb-5">
                            {exp.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2.5 text-sm text-body leading-relaxed">
                                    <span className="text-accent mt-1 flex-shrink-0">▹</span>
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2 border-t border-border-color/60">
                            {exp.tech.map(t => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
