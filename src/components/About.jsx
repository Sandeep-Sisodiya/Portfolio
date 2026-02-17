import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 bg-dark-bg overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-neon-violet/5 rounded-full blur-3xl" />

            <div ref={ref} className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Section Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2"
                        >
                            <span className="text-neon-blue font-mono text-sm tracking-wider">&lt;about&gt;</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold"
                        >
                            Crafting Digital
                            <br />
                            <span className="gradient-text">Experiences</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="space-y-6 text-gray-300 leading-relaxed text-lg"
                        >
                            <p>
                                I'm an <span className="text-neon-blue font-semibold">Android Developer</span> with hands-on experience
                                building high-performance, user-focused applications using{' '}
                                <span className="text-neon-violet font-semibold">Flutter</span>, Dart, Firebase, and scalable architectures.
                            </p>

                            <p>
                                With a strong foundation in <span className="text-white font-semibold">Data Structures & Algorithms</span>,
                                Operating Systems, DBMS, and System Design, I approach every problem with a
                                <span className="text-neon-blue"> logical</span> and
                                <span className="text-neon-blue"> performance-driven</span> mindset.
                            </p>

                            <p>
                                Currently pursuing <span className="font-semibold text-white">B.Tech in Computer Science</span> at
                                KIET Group of Institutions with an <span className="gradient-text font-bold">8.35+ CGPA</span>,
                                I'm passionate about creating products that solve real-world problems.
                            </p>
                        </motion.div>

                        {/* Highlights Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-2 gap-4 pt-6"
                        >
                            {[
                                { label: 'Experience', value: 'Flutter & Android' },
                                { label: 'Focus', value: 'Clean Architecture' },
                                { label: 'Strength', value: 'DSA in Java' },
                                { label: 'Passion', value: 'Product Quality' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-4 group hover:bg-white/5 transition-all"
                                >
                                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                                    <p className="text-white font-semibold group-hover:text-neon-blue transition-colors">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Closing Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                        >
                            <span className="text-neon-blue font-mono text-sm tracking-wider">&lt;/about&gt;</span>
                        </motion.div>
                    </motion.div>

                    {/* Right: 3D Interactive Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative group">
                            {/* Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                            {/* Main Card */}
                            <div className="relative glass-card p-8 space-y-6 transform group-hover:scale-[1.02] transition-transform duration-500">
                                {/* Profile Image Placeholder */}
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-dark-card to-dark-bg border border-white/10">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center space-y-4">
                                            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neon-blue to-neon-violet flex items-center justify-center text-5xl font-bold">
                                                SS
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold text-white">Sandeep Sisodiya</p>
                                                <p className="text-neon-blue font-mono mt-2">@developer</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animated Border */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-pulse" />
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-violet to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
                                    </div>
                                </div>

                                {/* Info Grid */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                        <div className="w-10 h-10 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Institute</p>
                                            <p className="text-sm font-semibold text-white">KIET Group of Institutions</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                        <div className="w-10 h-10 rounded-lg bg-neon-violet/20 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-neon-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Degree</p>
                                            <p className="text-sm font-semibold text-white">B.Tech CSE (2023-2027)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">CGPA</p>
                                            <p className="text-sm font-semibold gradient-text">8.35+ / 10.0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
