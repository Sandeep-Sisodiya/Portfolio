import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })

    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true)
        setTimeout(() => {
            setSending(false)
            setSent(true)
            setForm({ name: '', email: '', message: '' })
            setTimeout(() => setSent(false), 3000)
        }, 1200)
    }

    const inputClass = "w-full px-3 py-2 bg-bg border border-border-color rounded-md text-heading text-sm placeholder:text-muted focus:border-accent focus:outline-none transition-colors"

    return (
        <section id="contact" className="section" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
            >
                <span className="section-label">Contact</span>
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-desc">Have a project in mind or want to collaborate? Feel free to reach out.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8">
                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className="card">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-muted mb-1.5">Name</label>
                                <input type="text" id="name" name="name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-muted mb-1.5">Email</label>
                                <input type="email" id="email" name="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-muted mb-1.5">Message</label>
                                <textarea id="message" name="message" required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Your message..." />
                            </div>
                            <button type="submit" disabled={sending || sent} className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                                {sending ? 'Sending...' : sent ? '✓ Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Sidebar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="space-y-4"
                >
                    {/* Email */}
                    <div className="card">
                        <p className="text-[11px] text-muted uppercase tracking-wider mb-1">Email</p>
                        <a href="mailto:sandeep@example.com" className="text-sm text-heading hover:text-accent transition-colors break-all">
                            sandeep@example.com
                        </a>
                    </div>

                    {/* Location */}
                    <div className="card">
                        <p className="text-[11px] text-muted uppercase tracking-wider mb-1">Location</p>
                        <p className="text-sm text-heading">Ghaziabad, India</p>
                    </div>

                    {/* Social */}
                    <div className="card">
                        <p className="text-[11px] text-muted uppercase tracking-wider mb-2">Social</p>
                        <div className="flex gap-3">
                            {[
                                { label: 'GitHub', url: 'https://github.com/sandeep', d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                                { label: 'LinkedIn', url: 'https://linkedin.com/in/sandeep', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                                { label: 'Twitter', url: 'https://twitter.com/sandeep', d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                            ].map(s => (
                                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label} className="text-muted hover:text-accent transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Status */}
                    <div className="card">
                        <div className="flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            <p className="text-xs font-medium text-heading">Available</p>
                        </div>
                        <p className="text-[11px] text-muted leading-relaxed">
                            Open to internships and freelance projects.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
