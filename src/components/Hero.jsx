import { motion } from 'framer-motion'
import avatar from '../assets/avatar.jpeg'

export default function Hero() {
    return (
        <section id="home" className="section pt-32 pb-16 md:pt-40 md:pb-24">
            {/* ─── Hero Top: Name + Avatar ─── */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-14 mb-16 md:mb-20">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 text-center md:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs text-accent font-medium">Open to opportunities</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-heading tracking-tight leading-none mb-4">
                        Sandeep<br />
                        <span className="text-accent">Sisodiya</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-body font-medium mb-6">
                        Android Developer · Flutter Engineer
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contact" className="btn-outline">Let's Connect</a>
                    </div>
                </motion.div>

                {/* Circular Avatar with glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex-shrink-0"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110" />
                        <img
                            src={avatar}
                            alt="Sandeep Sisodiya"
                            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-accent/30 shadow-glow-lg"
                        />
                    </div>
                </motion.div>
            </div>

            {/* ─── Professional Summary (merged About) ─── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-3xl"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-heading tracking-tight mb-6">
                    About Me
                </h2>

                <div className="space-y-4 text-base md:text-lg text-body leading-relaxed">
                    <p>
                        I'm an <span className="text-heading font-semibold">Android Developer</span> with hands-on experience
                        building high-performance, user-focused applications using{' '}
                        <span className="text-heading font-semibold">Flutter</span>, Dart, Firebase, and scalable architectures.
                    </p>
                    <p>
                        Strong foundation in <span className="text-heading font-semibold">Data Structures & Algorithms</span>,
                        Operating Systems, DBMS, and System Design — I approach every problem with a logical,
                        performance-driven mindset.
                    </p>
                    <p>
                        Currently pursuing <span className="text-heading font-semibold">B.Tech in Computer Science</span> at
                        KIET Group of Institutions with an <span className="text-accent font-bold">8.35+ CGPA</span>,
                        passionate about building products that solve real-world problems.
                    </p>
                </div>

                {/* Highlight Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                    {[
                        { label: 'Experience', value: 'Flutter & Android' },
                        { label: 'Focus', value: 'Clean Architecture' },
                        { label: 'Strength', value: 'DSA in Java' },
                        { label: 'Passion', value: 'Product Quality' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                            className="card"
                        >
                            <p className="text-xs text-muted uppercase tracking-wider mb-1.5 font-medium">{item.label}</p>
                            <p className="text-sm text-heading font-semibold">{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
