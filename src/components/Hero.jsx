import { motion } from 'framer-motion'
import avatar from '../assets/avatar.jpeg'

export default function Hero() {
    return (
        <section id="home" className="section pt-36 pb-20 md:pt-40 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm text-muted font-medium">Open to opportunities</span>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-heading tracking-tight">
                            Sandeep Sisodiya
                        </h1>
                        <p className="text-lg md:text-xl text-body">
                            Android Developer · Flutter Engineer
                        </p>
                        <p className="text-sm text-muted font-mono">CS Undergraduate</p>
                    </div>

                    <p className="text-body text-base leading-relaxed max-w-lg">
                        Building high-performance mobile applications with clean architecture,
                        strong CS fundamentals, and a passion for exceptional user experiences.
                    </p>

                    <div className="flex gap-3 pt-2">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contact" className="btn-outline">Let's Connect</a>
                    </div>
                </motion.div>

                {/* Avatar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <img
                        src={avatar}
                        alt="Sandeep Sisodiya"
                        className="w-44 h-44 md:w-52 md:h-52 rounded-xl object-cover border border-border-color"
                    />
                </motion.div>
            </div>
        </section>
    )
}
