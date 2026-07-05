const stats = [
  { value: "30+", label: "Premium Templates" },
  { value: "100+", label: "Free Templates" },
  { value: "100+", label: "Customers & Startups" },
  { value: "100%", label: "Customizable" },
];

export function StatsSection() {
  return (
    <section id="about" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-[#D4DDE2] bg-white/78 p-6 shadow-[0_28px_90px_rgba(92,126,143,0.15)] backdrop-blur-xl md:grid-cols-[1.2fr_1fr] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C7E8F]">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#111827] sm:text-4xl">
            Clean Notion Systems Built for Real Work
          </h2>
          <p className="mt-5 text-base leading-7 text-[#4B5563]">
            I create Notion operating systems that help you manage clients,
            projects, finances, content, deals, tasks, and operations from one
            connected workspace. Every template is built with structure,
            clarity, and practical business use in mind. I have built 30+
            premium templates, 100+ free templates, and worked with 100+
            customers and startups to build better Notion systems.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#D4DDE2] bg-white/85 p-5 shadow-[0_14px_34px_rgba(92,126,143,0.1)]"
            >
              <p className="text-2xl font-semibold text-[#111827]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[#4B5563]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
