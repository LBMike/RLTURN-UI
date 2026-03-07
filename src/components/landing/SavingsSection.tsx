"use client";

import { motion } from "framer-motion";
import { TrendingUp, Layers } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Earn Real Yield on XRP & RLUSD",
    description:
      "Deposit into RLTURN's Savings Vault and earn yield powered by institutional-grade lending — a pure, transparent yield source.",
  },
  {
    icon: Layers,
    title: "Build Wealth Without Selling",
    description:
      "Compound your earnings over time. The same infrastructure trusted by institutions, now open to everyone.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function SavingsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center text-[1.875rem] font-semibold leading-tight text-primary-dark md:text-[2.25rem]"
        >
          Your XRP Works While You Sleep.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-lg text-center text-base text-text-secondary"
        >
          Put your idle assets to work with Savings Vaults backed by real
          institutional lending demand.
        </motion.p>

        {/* Feature Cards */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className="rounded-[12px] border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-dark">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
