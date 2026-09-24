import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const education = [
    {
        period: 'Aug 2023 – Jul 2027',
        title: 'Bachelor of Technology (B.Tech) - Computer Science (CS)',
        org: 'KIET Group of Institutions, Ghaziabad',
        desc: 'Pursuing Computer Science with core focus on Data Structures & Algorithms, Operating Systems, DBMS, System Design, and Computer Networks.',
        gpa: 'GPA: 8.20',
        tags: ['Computer Science', 'DSA in Java', 'System Design', 'DBMS', 'OS'],
        icon: '🎓',
    },
]

const achievements = [
    {
        title: 'Winner – Gemini & Firebase Studio Buildathon',
        org: 'Google Hackathon / Individual Buildathon',
        period: '2025',
        badge: '1st Place / Winner',
        desc: 'Won the individual hackathon for developing an AI-powered mental health companion (AI Therapy) using Gemini API and Firebase, demonstrating practical AI application development with dynamic CBT/DBT frameworks.',
        tags: ['Gemini API', 'Firebase', 'Flutter', 'AI Therapy Companion'],
        icon: '🏆',
    },
    {
        title: 'AWS Certified Cloud Practitioner',
        org: 'Amazon Web Services (AWS)',
        period: 'Feb 2025',
        badge: 'Official Certification',
        desc: 'Earned the AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge of AWS cloud concepts, core cloud services, security, pricing models, and cloud architecture.',
        tags: ['AWS Cloud', 'Cloud Architecture', 'Security & Compliance', 'Core Services'],
        icon: '☁️',
    },
    {
        title: 'TCS CodeVita Season 12',
        org: 'Tata Consultancy Services',
        period: 'Season 12',
        badge: 'Competitive Coding',
        desc: 'Completed TCS CodeVita Season 12, demonstrating advanced algorithmic problem-solving proficiency, optimization techniques, and data structures in Java.',
        tags: ['Competitive Programming', 'Algorithm Design', 'Java DSA'],
        icon: '💻',
    },
]

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <section id="education" className="section" ref={ref}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
                <span className="section-label">Academic & Credentials</span>
                <h2 className="section-title">Education & Achievements</h2>
                <p className="section-desc">Academic background, certifications, competitive achievements, and milestones.</p>
            </motion.div>

            {/* Education Sub-Section */}
            <div className="mb-12">
                <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-5 flex items-center gap-2">
                    <span>🎓</span> Education
                </h3>
                {education.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="card"
                    >
                        <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <h4 className="text-base font-bold text-heading">{item.title}</h4>
                                    <p className="text-xs text-muted mt-0.5">{item.org}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md">
                                    {item.gpa}
                                </span>
                                <span className="text-xs font-mono text-muted bg-bg-light border border-border-color px-2.5 py-1 rounded-md">
                                    {item.period}
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-body leading-relaxed mb-3 mt-3">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Achievements & Certifications Sub-Section */}
            <div>
                <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-5 flex items-center gap-2">
                    <span>🏆</span> Achievements & Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {achievements.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                            className="card flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-[11px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                                        {item.period}
                                    </span>
                                </div>
                                <h4 className="text-sm font-bold text-heading leading-snug">{item.title}</h4>
                                <p className="text-xs text-accent font-medium mt-0.5 mb-2">{item.org}</p>
                                <p className="text-xs text-body leading-relaxed mb-3">{item.desc}</p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-color/60">
                                {item.tags.map(t => <span key={t} className="tag text-[11px] py-0.5 px-2">{t}</span>)}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

