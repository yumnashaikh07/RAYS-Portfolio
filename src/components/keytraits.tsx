import {
  SearchCheck,
  TimerReset,
  MessageSquare,
  Expand,
  Brain,
} from "lucide-react";

export default function KeyTraits() {
  const traits = [
    {
      icon: <SearchCheck size={40} strokeWidth={1.5} />,
      title: "Attention to Detail",
      desc: "Pixel-perfect, user-focused designs with refined interaction in mind.",
    },
    {
      icon: <TimerReset size={40} strokeWidth={1.5} />,
      title: "Quick Turnaround",
      desc: "Timely delivery that matches your goals without losing quality.",
    },
    {
      icon: <MessageSquare size={40} strokeWidth={1.5} />,
      title: "Clear Communication",
      desc: "Smooth collaboration with consistent updates and no guesswork.",
    },
    {
      icon: <Expand size={40} strokeWidth={1.5} />,
      title: "Scalability",
      desc: "We build flexible systems that evolve with your growing business.",
    },
    {
      icon: <Brain size={40} strokeWidth={1.5} />,
      title: "Problem Solving",
      desc: "We identify challenges early and craft effective, lasting solutions.",
    },
  ];

  return (
    <main className="py-14 px-6 md:px-12 ">
      <h1 className="text-4xl md:text-5xl text-white font-extrabold text-center mb-16 tracking-widest">
        KEY TRAITS
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center text-white">
        {traits.map((trait, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] border border-[#333] rounded-xl p-6 shadow-lg hover:shadow-[#737373]/30 transition-all duration-300"
          >
            <div className="flex justify-center mb-4 text-[#d38bf9]
">
              {trait.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{trait.title}</h3>
            <p className="text-sm text-[#d1d1d1]">{trait.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
