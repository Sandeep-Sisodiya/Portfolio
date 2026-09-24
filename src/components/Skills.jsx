import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = {
    Languages: [
        { name: 'Java (DSA)', note: 'Advanced / Problem Solving', icon: '☕' },
        { name: 'Dart', note: 'Advanced / Flutter', icon: '🎯' },
        { name: 'JavaScript', note: 'ES6+ & Node.js', icon: '⚡' },
        { name: 'Python', note: 'Intermediate', icon: '🐍' },
        { name: 'C', note: 'Core / Procedural', icon: '⚙️' },
        { name: 'SQL', note: 'Relational Queries', icon: '🗄️' },
    ],
    'Frameworks & Technologies': [
        { name: 'Flutter', note: 'Cross-Platform Expert', icon: '📱' },
        { name: 'Node.js', note: 'Backend Runtime', icon: '🟢' },
        { name: 'Express.js', note: 'REST APIs & Middleware', icon: '🚂' },
        { name: 'Firebase', note: 'Auth & Cloud Firestore', icon: '🔥' },
        { name: 'MongoDB', note: 'NoSQL Database', icon: '🍃' },
        { name: 'PostgreSQL', note: 'Relational Database', icon: '🐘' },
        { name: 'SQLite', note: 'Offline / Local DB', icon: '💾' },
        { name: 'Redis', note: 'Caching & In-Memory', icon: '⚡' },
        { name: 'REST APIs', note: 'Endpoint Architecture', icon: '🌐' },
        { name: 'Provider', note: 'State Management', icon: '📦' },
        { name: 'GetX', note: 'Reactive State', icon: '🚀' },
        { name: 'BLoC', note: 'Business Logic Component', icon: '🔄' },
        { name: 'Geolocator', note: 'GPS & Path Tracking', icon: '📍' },
    ],
    'Tools & Platforms': [
        { name: 'Git & GitHub', note: 'Version Control & PRs', icon: '🔀' },
        { name: 'Docker', note: 'Containerization', icon: '🐳' },
        { name: 'GitHub Actions', note: 'CI/CD Pipelines', icon: '⚙️' },
        { name: 'Postman', note: 'API Testing & Docs', icon: '📮' },
        { name: 'Android Studio', note: 'Android Emulation & SDK', icon: '🤖' },
        { name: 'IntelliJ IDEA', note: 'Java Development', icon: '🧠' },
        { name: 'VS Code', note: 'Primary Editor', icon: '💻' },
        { name: 'Figma', note: 'UI/UX Wireframing', icon: '🎨' },
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
                <p className="section-desc">Technologies, frameworks, databases, and development tools I use</p>
            </motion.div>

            <div className="space-y-10">
                {Object.entries(skills).map(([category, items], catIdx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 + catIdx * 0.08 }}
                    >
                        <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
                            {category}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {items.map(skill => (
                                <div key={skill.name} className="card flex items-center gap-3">
                                    <span className="text-xl flex-shrink-0">{skill.icon}</span>
                                    <div className="min-w-0">
                                        <p className="text-sm text-heading font-semibold truncate">{skill.name}</p>
                                        <p className="text-xs text-muted truncate">{skill.note}</p>
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

