// "use client";
// import React, { useState, useEffect } from "react";
// import emailjs from "emailjs-com";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// export default function Contact() {
//   const [formData, setformData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

  
//   useEffect(() => {
//     emailjs.init("Cp1U6sjzrRcIQYZuJ"); 
//   }, []);
//   // useEffect(() => {
//   //   emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY|| ""); 
//   // }, []);
//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       subject: formData.subject,
//       message: formData.message,
//     };

//     // try {
//     //   await emailjs.send(
//     //    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY || "",  
//     //    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY || "",  
//     //     templateParams
//     //   );
//     try {
//       await emailjs.send(
//        "service_umm79sr",  
//        "template_4gvmrak",  
//         templateParams
//       );
//       setSubmitted(true);
//     } catch (error) {
//       console.error("Failed to send message:", error);
//     }

//     setformData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   }

//   function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
//     setformData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   return (
//     <main >
//       <h1 className="text-4xl md:text-5xl text-white font-extrabold text-center md:mb-3 mb-12 tracking-wide">
//         CONTACT US
//       </h1>
//       <section className="mx-auto container">
//       <div className="md:min-h-screen flex justify-between items-center md:p-24">
//         <div className="md:w-full flex flex-col md:flex-row border-[1px] border-black overflow-hidden">
//           <div className=" md:w-1/2 p-8 bg-transparent text-black">
//             <h2 className="md:text-3xl text-2xl font-bold  text-white mb-6">Ask Here !</h2>
//             {submitted && (
//               <p className="mb-4 text-blue-900">Message sent successfully!</p>
//             )}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className=" mb-1 bg-transparent text-white text-lg font-thin"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full py-1 bg-transparent border-white border-b-[1px] focus:outline-none text-white"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="mb-1 bg-transparent text-white text-lg font-thin">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full py-1 bg-transparent border-white border-b-[1px] focus:outline-none text-white"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="mb-1 bg-transparent text-white text-lg font-thin"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full py-1 bg-transparent border-white border-b-[1px] focus:outline-none text-white"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="mb-1 bg-transparent text-white text-lg font-thind"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full py-1 bg-transparent border-white border-b-[1px] focus:outline-none text-white"
//                   rows={3}
//                   required
//                 />
//               </div>
//               <button
//                 className=" bg-black mx-auto flex justify-center  font-semibold text-white px-5 py-2 rounded hover:bg-white hover:text-black hover:border-[1px] hover:border-black"
//                 type="submit"
//               >
//                 Send Message
//               </button>
//               <div className="flex md:hidden h-[1px] w-full my-9 bg-white"></div>
//             </form>
//           </div>

//           <section className=" text-white px-10 max-w-[450px] flex-shrink-0">
//             <Accordion type="multiple" className="             ">
//               <div className="md:text-3xl text-2xl font-bold  py-9 md:p-5">
//                 YOUR MOST ASKED QUESTIONS HERE!
//               </div>

//               <AccordionItem value="item-3" className="p-3 ">
//                 <AccordionTrigger className="text-xl font-bold">
//                   What we Offer
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <p>
//                     **RAYS Tech & Design Agency** offers Video Editing,
//                     Thumbnail Design, Web Development, Web Design, and Logo
//                     Design. We create modern, user-friendly websites and
//                     visually engaging content tailored to your brand.
//                     DM us on our Instagram to know more.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-7" className="p-3 ">
//                 <AccordionTrigger className="text-xl font-bold">
//                   How can I contact your team?
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <p>You can reach us through:</p>
//                   <ul>
//                     {/* <li>Email: support@yourbrand.com</li> */}
//                     {/* <li>Phone: +1 (123) 456-7890</li> */}
//                     <li>Social Media: @rays._.digital on Instagram </li>
//                   </ul>
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-9" className="p-3 ">
//                 <AccordionTrigger className="text-xl font-bold">
//                   Can I request a completely customized solution?
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <p>
//                     Yes, we specialize in tailoring designs to fit your unique
//                     vision, preferences. Contact us for more dicussion.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </section>
//         </div>
//       </div>
//       </section>
//     </main>
//   );
// }
"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init("Cp1U6sjzrRcIQYZuJ");
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const templateParams = { ...formData };

    try {
      await emailjs.send("service_umm79sr", "template_4gvmrak", templateParams);
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send message:", error);
    }

    setformData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <main className=" py-20 px-4 md:px-10">
      <h1 className="text-4xl md:text-5xl text-white font-extrabold text-center mb-12 tracking-wide">
        <span className="text-white ">CONTACT US</span>
      </h1>

      <section className="max-w-6xl mx-auto glass-container bg-black border border-[#d38bf9]/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg shadow-[#d38bf9]/10">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Form Section */}
          <div className="w-full md:w-1/2 p-8 text-white">
            <h2 className="text-3xl font-bold text-[#d38bf9] drop-shadow-[0_0_5px_#d38bf9] mb-6">
              Ask Here!
            </h2>
            {submitted && (
              <p className="mb-4 text-green-300 font-semibold">
                ✅ Message sent successfully!
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block mb-1 text-sm font-light text-[#cfcfcf]">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-transparent border-b border-[#baa6c0] text-white focus:outline-none focus:border-[#d38bf9] placeholder:text-gray-500"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-light text-[#cfcfcf]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-transparent border-b border-[#baa6c0] text-white focus:outline-none focus:border-[#d38bf9] placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                className="w-fit bg-white hover:bg-black text-black transition-all hover:text-white font-semibold px-6 py-2 rounded-full shadow-md shadow-[#d38bf9]/30"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Accordion Section */}
          <section className="text-white px-6 md:px-10 py-10 w-full md:w-[45%] flex-shrink-0">
            <div className="text-2xl md:text-3xl font-bold text-[#d38bf9] drop-shadow-[0_0_4px_#d38bf9] mb-6">
              Your Most Asked Questions
            </div>

            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="item-1" className="border-b border-white/10 pb-4">
                <AccordionTrigger className="text-lg font-semibold">
                  What we offer?
                </AccordionTrigger>
                <AccordionContent className="text-[#cccccc] text-sm pt-2">
                  <p>
                    RAYS Tech & Design Agency provides Web Development, Video Editing,
                    Thumbnail Design, Logo Design, and Website Design — all customized to your brand.
                    DM us on Instagram for more.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-white/10 pb-4">
                <AccordionTrigger className="text-lg font-semibold">
                  How can I contact your team?
                </AccordionTrigger>
                <AccordionContent className="text-[#cccccc] text-sm pt-2">
                  <p>You can reach us through:</p>
                  <ul className="list-disc list-inside ml-2 mt-1">
                    <li>@rays._.digital</li>
                    <li>raystechndesign@gmail.com</li>
                    <li>Book 1:1 Consultation via <a href="https://calendly.com/raystechndesign/30min" target="_blank" rel="noopener noreferrer" className="text-[#d38bf9] underline">Book Now!</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Can I request a completely custom solution?
                </AccordionTrigger>
                <AccordionContent className="text-[#cccccc] text-sm pt-2">
                  <p>
                    Absolutely! We specialize in custom-tailored designs.
                    Tell us your vision and we&apos;ll bring it to life.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </section>
    </main>
  );
}
