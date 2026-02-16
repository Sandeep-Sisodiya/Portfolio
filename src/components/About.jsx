import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 12 },
        animate: isInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.4, delay },
    })

    return (
        <section id="about" className="section" ref={ref}>
            <motion.div {...fadeUp(0)}>
                <span className="section-label">About</span>
                <h2 className="section-title">A bit about me</h2>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="space-y-4 text-sm text-body leading-relaxed max-w-2xl mt-6">
                <p>
                    I'm an <span className="text-heading font-medium">Android Developer</span> with hands-on experience building high-performance, user-focused applications using{' '}
                    <span className="text-heading font-medium">Flutter</span>, Dart, Firebase, and scalable architectures.
                </p>
                <p>
                    With a strong foundation in <span className="text-heading font-medium">Data Structures & Algorithms</span>, Operating Systems, DBMS, and System Design, I approach every problem with a logical and performance-driven mindset.
                </p>
                <p>
                    Currently pursuing <span className="text-heading font-medium">B.Tech in Computer Science</span> at KIET Group of Institutions with an <span className="text-accent font-semibold">8.35+ CGPA</span>.
                </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                {[
                    { label: 'Experience', value: 'Flutter & Android' },
                    { label: 'Focus', value: 'Clean Architecture' },
                    { label: 'Strength', value: 'DSA in Java' },
                    { label: 'Passion', value: 'Product Quality' },
                ].map((item, i) => (
                    <div key={i} className="card">
                        <p className="text-[11px] text-muted uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-sm text-heading font-medium">{item.value}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}
