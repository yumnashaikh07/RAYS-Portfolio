import {
  SearchCheck,
  TimerReset,
  MessageSquare,
  Expand,
  Brain,
} from "lucide-react";

export default function KeyTraits() {
  return (
    <main
      className="md:my-10 py-10 px-6"
      style={{
        background: "linear-gradient(to right, #000000, #737373, #737373)",
      }}
    >
      <h1 className="text-4xl md:text-5xl text-white font-extrabold text-center mb-12 tracking-wide">
        KEY TRAITS
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-3 md:px-10 text-white text-center">
        {/* Trait Item */}
        {[
          {
            icon: <SearchCheck size={50} strokeWidth={1.2} />,
            title: "Attention to Detail",
            desc:
              "Pixel-perfect, user-focused designs with refined interaction in mind.",
          },
          {
            icon: <TimerReset size={50} strokeWidth={1.2} />,
            title: "Quick Turnaround",
            desc:
              "Timely delivery that matches your goals without losing quality.",
          },
          {
            icon: <MessageSquare size={50} strokeWidth={1.2} />,
            title: "Clear Communication",
            desc:
              "Smooth collaboration with consistent updates and no guesswork.",
          },
          {
            icon: <Expand size={50} strokeWidth={1.2} />,
            title: "Scalability",
            desc:
              "We build flexible systems that evolve with your growing business.",
          },
          {
            icon: <Brain size={50} strokeWidth={1.2} />,
            title: "Problem Solving",
            desc:
              "We identify challenges early and craft effective, lasting solutions.",
          },
        ].map((trait, index) => (
          <div key={index}>
            <div className="text-white flex justify-center mb-4">{trait.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{trait.title}</h3>
            <p className="text-[#d1d1d1] md:mx-0 mx-9 text-sm px-3">{trait.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
