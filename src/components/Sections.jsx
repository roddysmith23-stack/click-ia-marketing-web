import React from 'react';
import { motion } from 'framer-motion';
import { Download, Cpu, Rocket } from 'lucide-react';

export const HowItWorks = () => {
    const steps = [
        { icon: Download, title: "1. Carga", desc: "Sube tu 'Foto Aburrida' y define tu objetivo." },
        { icon: Cpu, title: "2. Magia IA", desc: "Prompt Madre + AntiGravity Generan viralidad." },
        { icon: Rocket, title: "3. Lanzamiento", desc: "Revisa, edita y publica con un click." }
    ];

    return (
        <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl flex-1 w-full text-left hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-deepVoid border border-white/20 flex items-center justify-center mb-6 group-hover:border-neonMint transition-colors">
                                <step.icon className="w-6 h-6 text-white group-hover:text-neonMint" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-white/50 leading-relaxed font-light">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const NanoStudioSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Gradient Divider */}
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyberViolet to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <span className="text-cyberViolet font-bold tracking-widest uppercase mb-4 block">Premium Feature</span>
                    <h2 className="text-5xl font-black text-white mb-6">Nano Studio.</h2>
                    <p className="text-xl text-white/60 font-light mb-8">El poder de un equipo de diseño en tu bolsillo. Exclusivo para planes Pro y superiores.</p>

                    <ul className="grid grid-cols-2 gap-4">
                        {['AI Upscale 4K', 'Background Removal', 'Neuro Color Grade', 'Text Enhancement'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyberViolet" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute inset-0 bg-cyberViolet/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 font-black text-6xl uppercase tracking-tighter">
                            UI Mock
                        </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-deepVoid border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-neonMint animate-pulse" />
                        <span className="text-white font-bold text-sm">AI Enhanced</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export const PerformanceSection = () => {
    return (
        <section className="py-32 px-6 bg-white/5 relative">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-black text-white mb-8">Data Driven. Profit Focused.</h2>
                <div className="glass-panel p-8 rounded-2xl border border-white/10 aspect-[16/9] flex items-end justify-center relative overflow-hidden">
                    {/* Mock Graph */}
                    <svg className="w-full h-2/3" preserveAspectRatio="none">
                        <path d="M0,100 C100,80 300,150 500,50 S800,10 1000,0" fill="none" stroke="#00FF99" strokeWidth="4" className="drop-shadow-[0_0_10px_#00FF99]" />
                    </svg>
                    <div className="absolute top-8 left-8 text-left">
                        <p className="text-white/40 text-sm font-bold uppercase tracking-wider">Total ROI</p>
                        <p className="text-4xl text-white font-mono font-bold mt-1">+245%</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
