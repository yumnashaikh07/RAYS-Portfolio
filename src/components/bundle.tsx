import { CheckCircle, Gift } from "lucide-react";
export default function Bundle() {
  return (
    <main
      className="md:mx-auto mx-5 md:mt-0 md:p-0 p-3 mt-12"
      style={{
        background: "linear-gradient(to right, #000000, #737373, #737373)",
      }}
    >
      <h1 className="text-4xl md:text-5xl mb-14 text-center text-white font-extrabold tracking-wide">
        Bundle Offers
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-20">
        {[
          {
            title: "Starter Creative Pack",
            items: [
              "Single Page Website ($200)",
              "Basic Logo Design ($35)",
              "Basic Video Editing (~$15)",
            ],
            price: "$245",
            original: "$250",
            save: "$5",
            bonus: "+1 Logo Revision",
          },
          {
            title: "Business Launch Combo",
            items: [
              "Business Website ($700)",
              "Advanced Logo Design ($70)",
              "Social Media Video Editing (~$25)",
            ],
            price: "$790",
            original: "$795",
            save: "$5",
            bonus: "+1 Revision on Logo & Video",
          },
          {
            title: "Premium Brand Builder",
            items: [
              "Advanced E-com Website ($1100)",
              "Advanced Logo Design ($70)",
              "Social Media Video Editing (~$30)",
            ],
            price: "$1190",
            original: "$1200",
            save: "$10",
          },
        ].map((bundle, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-[#737373] rounded-2xl p-8 text-white shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-center text-xl font-bold text-white mb-4 tracking-wide">
              {bundle.title}
            </h2>

            <ul className="space-y-3 mb-5 text-gray-300">
              {bundle.items.map((item, index) => (
                <li key={index} className="flex gap-2 items-start font-medium">
                  <CheckCircle size={20} className="text-[#baa6c0] mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="h-1 bg-[#737373] mx-auto rounded-full mb-4 w-2/3"></div>

            <div className="text-center space-y-2">
              <div className="inline-block bg-green-500/10 text-green-400 font-bold px-4 py-1 rounded-full text-lg">
                Bundle Price: {bundle.price}
              </div>
              <div className="text-sm text-gray-400 line-through">
                Original: {bundle.original}
              </div>
              <div className="text-sm text-red-400 font-semibold">
                You Save: {bundle.save}
              </div>
              {bundle.bonus && (
                <div className="mt-2 flex items-center gap-x-3 justify-center text-sm text-green-300">
                  <Gift size={20} className="text-green-400" />
                  <p>{bundle.bonus}</p>
                </div>
              )}
            </div>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=raystechndesign@gmail.com&su=${encodeURIComponent(
                "Booking Request: " + bundle.title
              )}&body=${encodeURIComponent(
                `Hi, I would like to book the "${bundle.title}" bundle. Please let me know the next steps.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-5 w-full bg-[#737373] hover:bg-[#5c5c5c] text-white font-bold py-2 px-4 rounded-lg transition">
                Book Now
              </button>
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
