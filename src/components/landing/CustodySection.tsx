"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CustodySection() {
  return (
    <section className="py-24 px-6 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-[1280px] flex-col items-center"
      >
        <p className="text-lg font-semibold text-text-primary">
          Secured by institutional-grade XRP custody services
        </p>
        <div className="mt-8 flex items-center gap-12">
          <Image src="/ripple-custody.svg" alt="Ripple Custody" width={140} height={60} className="h-[60px] w-auto" />
          <Image src="/fireblock.svg" alt="Fireblocks" width={140} height={60} className="h-[60px] w-auto" />
          <Image src="/zodia.svg" alt="Zodia Custody" width={140} height={60} className="h-[60px] w-auto" />
        </div>
      </motion.div>
    </section>
  );
}
