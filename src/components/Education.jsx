import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
    { year: '2023 – 2027', title: 'B.Tech in Computer Science', org: 'KIET Group of Institutions, Ghaziabad', desc: 'Pursuing CSE with focus on DSA, OS, DBMS, OOP, System Design.', tags: ['CGPA: 8.35+', 'Software Engineering'], icon: '🎓' },
    { year: 'Oct 2025 - Nov 2025', title: 'Null Classes Intern', org: 'Flutter Developer Internship', desc: 'I worked on real-time app development, strengthened my Flutter & Firebase skills.', tags: ['Flutter', 'Advanced Features'], icon: '📚' },
    { year: '2025', title: 'Google Gemini Buildathon', org: 'AI Development Competition', desc: 'Built AI-powered therapy app using Gemini API with Flutter and Firebase.', tags: ['Gemini API', 'CBT/DBT Modules'], icon: '🏆' },
    { year: 'Jul 2025 - Aug 2025', title: 'OASIS Flutter Internship', org: 'OASIS Infobyte', desc: 'Android development internship focused on real-world app development.', tags: ['Android & Flutter', 'Code Review'], icon: '🚀' },
    { year: 'Mar 2025', title: 'CodeVita Participation', org: 'TCS CodeVita', desc: 'Coding Commpetition (DSA in JAVA)', tags: ['Algorithm Design', 'Java'], icon: '💻' },
]

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <section id="education" className="section" ref={ref}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
                <span className="section-label">Journey</span>
                <h2 className="section-title">Education & Milestones</h2>
                <p className="section-desc">My path through learning, building, and growing</p>
            </motion.div>

            <div className="relative ml-4">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-border-color" />

                <div className="space-y-5">
                    {timeline.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.05 + i * 0.08 }} className="relative pl-8">
                            <div className="absolute left-[-5px] top-[1.4rem] w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg" />

                            <div className="card">
                                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-lg">{item.icon}</span>
                                        <div>
                                            <h3 className="text-base font-bold text-heading">{item.title}</h3>
                                            <p className="text-xs text-muted mt-0.5">{item.org}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono text-accent font-medium whitespace-nowrap bg-accent/10 px-2.5 py-1 rounded-md">{item.year}</span>
                                </div>
                                <p className="text-sm text-body leading-relaxed mb-3">{item.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
