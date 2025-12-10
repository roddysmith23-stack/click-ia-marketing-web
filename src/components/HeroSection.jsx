import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 pt-32 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-neonMint/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-cyberViolet/15 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            {/* Content Module */}
            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-neonMint animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-white/80 uppercase">The Marketing of the Future</span>
                </motion.div>

                {/* Hero Text */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] text-gradient-hero"
                >
                    CLICK.IA
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/60 font-light max-w-3xl leading-relaxed"
                >
                    Transforma la <span className="text-white font-bold italic">"Foto Aburrida"</span> en contenido viral con NeuroMarketing Visual.
                    <br className="hidden md:block" /> Promesa de Viralidad: <span className="text-neonMint font-mono font-bold">98%</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 mt-8 w-full md:w-auto"
                >
                    <button className="group px-8 py-5 rounded-full bg-white text-deepVoid font-black tracking-[0.1em] uppercase hover:bg-neonMint hover:shadow-[0_0_40px_rgba(0,255,153,0.5)] transition-all flex items-center justify-center gap-3">
                        Inicia tu Prueba
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="px-8 py-5 rounded-full border border-white/20 text-white font-bold tracking-[0.1em] uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                        <Play className="w-4 h-4 fill-white" />
                        Ver Demo
                    </button>
                </motion.div>

                {/* Social Proof Mock */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <span className="text-xl font-black">Google AntiGravity</span>
                    <span className="text-xl font-bold">Gemini</span>
                    <span className="text-xl font-bold">Imagen 2</span>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Scroll</span>
            </motion.div>
        </section>
    );
};

export default HeroSection;
