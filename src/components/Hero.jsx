import { motion } from 'framer-motion'
import avatar from '../assets/avatar.jpeg'

export default function Hero() {
    return (
        <section id="home" className="section pt-32 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-5"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-xs text-muted font-medium">Open to opportunities</span>
                    </div>

                    <div>
                        <h1 className="text-3xl md:text-4xl font-semibold text-heading leading-tight">
                            Sandeep Sisodiya
                        </h1>
                        <p className="text-base text-body mt-2">
                            Android Developer · Flutter Engineer
                        </p>
                        <p className="text-xs text-muted font-mono mt-1">CS Undergraduate</p>
                    </div>

                    <p className="text-body text-sm leading-relaxed max-w-md">
                        Building high-performance mobile applications with clean architecture,
                        strong CS fundamentals, and a passion for exceptional user experiences.
                    </p>

                    <div className="flex gap-3 pt-1">
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
                        className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover border border-border-color"
                    />
                </motion.div>
            </div>
        </section>
    )
}
