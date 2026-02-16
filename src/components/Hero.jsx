import { motion } from 'framer-motion'
import avatar from '../assets/avatar.jpeg'

export default function Hero() {
    return (
        <section id="home" className="section pt-36 pb-20 md:pt-40 md:pb-28">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-5 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-xs text-accent font-medium">Open to opportunities</span>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-heading tracking-tight">
                            Sandeep Sisodiya
                        </h1>
                        <p className="text-lg md:text-xl text-body">
                            Android Developer · Flutter Engineer
                        </p>
                    </div>

                    <p className="text-body text-base leading-relaxed max-w-lg mx-auto md:mx-0">
                        Building high-performance mobile applications with clean architecture,
                        strong CS fundamentals, and a passion for exceptional user experiences.
                    </p>

                    <div className="flex gap-3 pt-2 justify-center md:justify-start">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contact" className="btn-outline">Let's Connect</a>
                    </div>
                </motion.div>

                {/* Avatar — circular */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex-shrink-0"
                >
                    <div className="relative">
                        <img
                            src={avatar}
                            alt="Sandeep Sisodiya"
                            className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-surface shadow-card-hover"
                        />
                        <div className="absolute inset-0 rounded-full ring-1 ring-border-color" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
