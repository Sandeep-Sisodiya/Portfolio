import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import avatar from '../assets/avatar.jpeg'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 14 },
        animate: isInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.45, delay },
    })

    return (
        <section id="about" className="section" ref={ref}>
            <motion.div {...fadeUp(0)}>
                <span className="section-label">About</span>
                <h2 className="section-title">A bit about me</h2>
            </motion.div>

            {/* Photo + Text — evenly aligned */}
            <motion.div {...fadeUp(0.08)} className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-2">
                {/* Circular Photo */}
                <div className="flex-shrink-0">
                    <img
                        src={avatar}
                        alt="Sandeep Sisodiya"
                        className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-surface shadow-card-hover"
                    />
                </div>

                {/* Text */}
                <div className="space-y-4 text-base text-body leading-relaxed text-center md:text-left">
                    <p>
                        I'm an <span className="text-heading font-semibold">Android Developer</span> with hands-on experience building high-performance, user-focused applications using{' '}
                        <span className="text-heading font-semibold">Flutter</span>, Dart, Firebase, and scalable architectures.
                    </p>
                    <p>
                        With a strong foundation in <span className="text-heading font-semibold">Data Structures & Algorithms</span>, Operating Systems, DBMS, and System Design, I approach every problem with a logical mindset.
                    </p>
                    <p>
                        Currently pursuing <span className="text-heading font-semibold">B.Tech in Computer Science</span> at KIET Group of Institutions with an <span className="text-accent font-bold">8.35+ CGPA</span>.
                    </p>
                </div>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                    { label: 'Experience', value: 'Flutter & Android' },
                    { label: 'Focus', value: 'Clean Architecture' },
                    { label: 'Strength', value: 'DSA in Java' },
                    { label: 'Passion', value: 'Product Quality' },
                ].map((item, i) => (
                    <div key={i} className="card text-center md:text-left">
                        <p className="text-xs text-muted uppercase tracking-wider mb-1.5 font-medium">{item.label}</p>
                        <p className="text-sm text-heading font-semibold">{item.value}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}
