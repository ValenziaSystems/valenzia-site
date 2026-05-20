"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050814] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 md:px-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 md:mb-8 md:text-sm"
        >
          Enterprise Operational Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-4xl font-semibold tracking-tight md:text-7xl"
        >
          Valenzia builds intelligent systems for modern operations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:mt-8 md:text-lg md:leading-8"
        >
          We design automation, integrations and digital infrastructure for
          companies that need more control, speed and operational intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10"
        >
          <a
            href="mailto:contato@valenzia.com.br"
            className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-[#050814] transition hover:bg-white/90 sm:w-auto"
          >
            Start a conversation
          </a>

          <a
            href="#what-we-build"
            className="w-full rounded-full border border-white/15 px-6 py-3 text-center text-sm font-medium text-white/80 transition hover:bg-white/5 sm:w-auto"
          >
            Explore our focus
          </a>
        </motion.div>
      </section>

      <section
        id="what-we-build"
        className="border-t border-white/10 bg-white/[0.02] px-6 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 md:text-sm md:tracking-[0.3em]">
            What we build
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
            Software infrastructure for companies that operate at scale.
          </h2>

          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
            {[
              {
                title: "Enterprise Automation",
                description:
                  "Automated workflows that reduce manual work, errors and operational delays.",
              },
              {
                title: "ERP Integrations",
                description:
                  "Systems connected to internal processes, databases, APIs and business rules.",
              },
              {
                title: "Messaging Platforms",
                description:
                  "Official WhatsApp integrations, campaign engines and customer communication flows.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:rounded-3xl md:p-6"
              >
                <h3 className="text-lg font-medium md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55 md:mt-4 md:text-base md:leading-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 md:text-sm md:tracking-[0.3em]">
              Operational Intelligence
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Turning business processes into measurable systems.
            </h2>
          </div>

          <p className="text-base leading-7 text-white/60 md:text-lg md:leading-8">
            Valenzia exists to transform fragmented operations into connected,
            observable and intelligent digital environments. Our work combines
            software engineering, automation, APIs and data-driven execution.
          </p>
        </motion.div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Let’s build the future of operations.
            </h2>
            <p className="mt-3 text-sm text-white/55 md:text-base">
              Valenzia Intelligent Solutions · Brazil
            </p>
          </div>

          <a
            href="mailto:contato@valenzia.com.br"
            className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-[#050814] transition hover:bg-white/90 sm:w-auto"
          >
            contato@valenzia.com.br
          </a>
        </div>
      </section>
    </main>
  );
}