import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star } from 'lucide-react';

const PricingSection = () => {
    const plans = [
        {
            name: "Starter",
            price: "49",
            gens: "5 Generaciones",
            studio: false,
            features: ["5 Campañas Mes", "Formatos Básicos", "Soporte Email"],
            tag: "Principiante",
            popular: false
        },
        {
            name: "Pro",
            price: "99",
            gens: "100 Generaciones",
            studio: true,
            features: ["Nano Studio Access", "AI Upscale", "Remove BG", "Priority Support"],
            tag: "Emprendedor",
            popular: true
        },
        {
            name: "Enterprise",
            price: "299",
            gens: "400 Generaciones",
            studio: true,
            features: ["Todo en Pro", "API Access", "Account Manager", "Bulk Export"],
            tag: "Empresario",
            popular: false
        },
        {
            name: "Empresa",
            price: "499",
            gens: "800 Generaciones",
            studio: true,
            features: ["Todo en Enterprise", "Custom Branding", "Team Seats (5)", "SLA"],
            tag: "Alto Volumen",
            popular: false
        },
        {
            name: "Agencia",
            price: "999",
            gens: "2000 Generaciones",
            studio: true,
            features: ["Whitelabel", "Unlimited Teams", "Custom Models", "24/7 Phone"],
            tag: "Agencia",
            popular: false
        }
    ];

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-cyberViolet/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">Planes de Inversión</h2>
                    <p className="text-white/60 text-lg">Elige el poder de computación que necesitas.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${plan.popular
                                    ? 'bg-white/10 border-neonMint shadow-[0_0_30px_rgba(0,255,153,0.15)] scale-105 z-10'
                                    : 'glass-panel hover:bg-white/10'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 inset-x-0 flex justify-center">
                                    <span className="bg-neonMint text-deepVoid text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-deepVoid" /> Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <span className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? 'text-neonMint' : 'text-white/40'}`}>
                                    {plan.tag}
                                </span>
                                <h3 className="text-2xl font-bold text-white mt-1">{plan.name}</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-black text-white tracking-tighter">${plan.price}</span>
                                    <span className="text-white/40 text-sm ml-1">/mes</span>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="p-1 rounded bg-cyberViolet/20">
                                        <Zap className="w-4 h-4 text-cyberViolet" />
                                    </div>
                                    <span className="text-sm font-bold text-white">{plan.gens}</span>
                                </div>
                                <div className="h-[1px] bg-white/10 my-1" />
                                {plan.features.map((feat, j) => (
                                    <div key={j} className="flex items-center gap-2 text-sm text-white/70">
                                        <Check className="w-4 h-4 text-neonMint" />
                                        {feat}
                                    </div>
                                ))}
                                {!plan.studio && (
                                    <div className="flex items-center gap-2 text-sm text-white/20 line-through decoration-white/20">
                                        <Check className="w-4 h-4" />
                                        Nano Studio Access
                                    </div>
                                )}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs transition-all ${plan.popular
                                    ? 'bg-neonMint text-deepVoid hover:shadow-[0_0_20px_#00FF99]'
                                    : 'bg-white/5 text-white hover:bg-white hover:text-deepVoid'
                                }`}>
                                Elegir Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
