export default function Home() {
  return (
    <main className="min-h-screen bg-[#050814] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="mb-8 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          Enterprise Operational Intelligence
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Valenzia builds intelligent systems for modern operations.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
          We design automation, integrations and digital infrastructure for
          companies that need more control, speed and operational intelligence.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:contato@valenzia.com.br"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050814] transition hover:bg-white/90"
          >
            Start a conversation
          </a>

          <a
            href="#what-we-build"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5"
          >
            Explore our focus
          </a>
        </div>
      </section>

      <section
        id="what-we-build"
        className="border-t border-white/10 bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            What we build
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
            Software infrastructure for companies that operate at scale.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
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
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Operational Intelligence
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Turning business processes into measurable systems.
            </h2>
          </div>

          <p className="text-lg leading-8 text-white/60">
            Valenzia exists to transform fragmented operations into connected,
            observable and intelligent digital environments. Our work combines
            software engineering, automation, APIs and data-driven execution.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Let’s build the future of operations.</h2>
            <p className="mt-3 text-white/55">
              Valenzia Intelligent Solutions · Brazil
            </p>
          </div>

          <a
            href="mailto:contato@valenzia.com.br"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050814] transition hover:bg-white/90"
          >
            contato@valenzia.com.br
          </a>
        </div>
      </section>
    </main>
  );
}