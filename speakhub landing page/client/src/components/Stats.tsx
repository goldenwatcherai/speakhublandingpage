/**
 * Stats — social proof numbers bar
 * Design: #030712 bg, centered stat items
 */

const stats = [
  { value: "100%", label: "Calls Answered" },
  { value: "24/7/365", label: "Always On" },
  { value: "Zero", label: "Missed Leads" },
  { value: "$0", label: "Extra HR Overhead" },
];

export default function Stats() {
  return (
    <section className="bg-[#030712] py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-6">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-[#94a3b8] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
