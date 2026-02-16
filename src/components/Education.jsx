import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
    {
        year: '2023 – 2027',
        title: 'B.Tech in Computer Science',
        org: 'KIET Group of Institutions, Ghaziabad',
        desc: 'Pursuing CSE with focus on core fundamentals — DSA, OS, DBMS, OOP, System Design.',
        tags: ['CGPA: 8.35+', 'Software Engineering'],
        icon: '🎓',
    },
    {
        year: '2024',
        title: 'Google Gemini Buildathon',
        org: 'AI Development Competition',
        desc: 'Built AI-powered mental health therapy app using Gemini API with Flutter and Firebase.',
        tags: ['Gemini API', 'CBT/DBT Modules'],
        icon: '🏆',
    },
    {
        year: '2024',
        title: 'OASIS Internship',
        org: 'OASIS Infobyte',
        desc: 'Android development internship focused on real-world application development and collaboration.',
        tags: ['Android & Flutter', 'Code Review'],
        icon: '🚀',
    },
    {
        year: '2024',
        title: 'CodeVita Participation',
        org: 'TCS CodeVita',
        desc: 'Competitive programming challenge focusing on problem-solving and algorithm optimization.',
        tags: ['Algorithm Design', 'Java'],
        icon: '💻',
    },
    {
        year: '2023 – Present',
        title: 'Null Classes',
        org: 'Advanced Programming Training',
        desc: 'Specialized training in competitive programming, system design, and interview preparation.',
        tags: ['Advanced DSA', 'System Design'],
        icon: '📚',
    },
]

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <section id="education" className="section" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
            >
                <span className="section-label">Journey</span>
                <h2 className="section-title">Education & Milestones</h2>
                <p className="section-desc">My path through learning, building, and growing</p>
            </motion.div>

            {/* Timeline */}
            <div className="relative ml-3">
                {/* Line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-border-color" />

                <div className="space-y-6">
                    {timeline.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.05 + i * 0.08 }}
                            className="relative pl-8"
                        >
                            {/* Dot */}
                            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent" />

                            <div className="card">
                                <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm">{item.icon}</span>
                                        <div>
                                            <h3 className="text-sm font-semibold text-heading">{item.title}</h3>
                                            <p className="text-[11px] text-muted">{item.org}</p>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-mono text-accent whitespace-nowrap">{item.year}</span>
                                </div>

                                <p className="text-sm text-body leading-relaxed mb-2">{item.desc}</p>

                                <div className="flex flex-wrap gap-1.5">
                                    {item.tags.map(t => (
                                        <span key={t} className="tag text-[11px]">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
