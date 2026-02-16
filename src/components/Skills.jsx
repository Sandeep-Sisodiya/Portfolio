import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = {
    Languages: [
        { name: 'Java', note: 'DSA Expert', icon: '☕' },
        { name: 'Dart', note: 'Advanced', icon: '🎯' },
        { name: 'C', note: 'Intermediate', icon: '⚙️' },
        { name: 'Python', note: 'Intermediate', icon: '🐍' },
    ],
    'Frameworks & Libraries': [
        { name: 'Flutter', note: 'Expert', icon: '📱' },
        { name: 'Firebase', note: 'Advanced', icon: '🔥' },
        { name: 'REST APIs', note: 'Advanced', icon: '🌐' },
        { name: 'SQLite', note: 'Intermediate', icon: '💾' },
        { name: 'Provider', note: 'Advanced', icon: '📦' },
        { name: 'GetX', note: 'Intermediate', icon: '⚡' },
        { name: 'Bloc', note: 'Advanced', icon: '🔄' },
        { name: 'Geolocator', note: 'Advanced', icon: '📍' },
    ],
    Tools: [
        { name: 'Android Studio', note: 'Expert', icon: '🤖' },
        { name: 'VS Code', note: 'Expert', icon: '💻' },
        { name: 'IntelliJ', note: 'Advanced', icon: '🧠' },
        { name: 'Git & GitHub', note: 'Advanced', icon: '🔀' },
    ],
}

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <section id="skills" className="section" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
            >
                <span className="section-label">Skills</span>
                <h2 className="section-title">Tech Stack</h2>
                <p className="section-desc">Technologies and tools I use to build applications</p>
            </motion.div>

            <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                            {category}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                            {items.map(skill => (
                                <div key={skill.name} className="card flex items-center gap-2.5">
                                    <span className="text-base flex-shrink-0">{skill.icon}</span>
                                    <div className="min-w-0">
                                        <p className="text-sm text-heading font-medium truncate">{skill.name}</p>
                                        <p className="text-[11px] text-muted">{skill.note}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
