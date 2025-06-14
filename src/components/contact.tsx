"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
  // useEffect(() => {
  //   emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY|| ""); 
  // }, []);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // try {
    //   await emailjs.send(
    //    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY || "",  
    //    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY || "",  
    //     templateParams
    //   );
    try {
      await emailjs.send(
       "service_umm79sr",  
       "template_4gvmrak",  
        templateParams
      );
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <main className="mx-auto container">
      <div className="md:min-h-screen flex justify-center items-center md:p-14">
        <div className="md:w-full flex flex-col md:flex-row border-[1px] border-black shadow-2xl overflow-hidden">
          <div className=" md:w-1/2 p-8 bg-transparent text-black">
          {/* bg-gradient-to-r   from-[#213e9f] via-[#4762bd] via-[#3790c7]  via-[#bbbad2] via-[#c9c7bc] to-[#c9c7bc] */}
            <h2 className="md:text-3xl text-2xl font-bold  text-white mb-6">Ask Here !</h2>
            {submitted && (
              <p className="mb-4 text-blue-900">Message sent successfully!</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className=" mb-1 bg-transparent text-white text-lg font-thin"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-1 bg-transparent border-white border-b-[1px] focus:outline-none text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 bg-transparent text-white text-lg font-thin">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-1 bg-transparent border-white border-b-[1px] focus:outline-none text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 bg-transparent text-white text-lg font-thin"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full py-1 bg-transparent border-white border-b-[1px] focus:outline-none text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 bg-transparent text-white text-lg font-thind"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full py-1 bg-transparent border-white border-b-[1px] focus:outline-none text-white"
                  rows={3}
                  required
                />
              </div>
              <button
                className=" bg-black mx-auto flex justify-center  font-semibold text-white px-5 py-2 rounded hover:bg-white hover:text-black hover:border-[1px] hover:border-black"
                type="submit"
              >
                Send Message
              </button>
              <div className="flex md:hidden h-[1px] w-full my-9 bg-white"></div>
            </form>
          </div>

          <section className=" text-white px-10 max-w-[450px] flex-shrink-0">
            <Accordion type="multiple" className="             ">
              <div className="md:text-3xl text-2xl font-bold  py-9 md:p-5">
                YOUR MOST ASKED QUESTIONS HERE!
              </div>

              <AccordionItem value="item-3" className="p-3 ">
                <AccordionTrigger className="text-xl font-bold">
                  What we Offer
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    **RAYS Tech & Design Agency** offers Video Editing,
                    Thumbnail Design, Web Development, Web Design, and Logo
                    Design. We create modern, user-friendly websites and
                    visually engaging content tailored to your brand.
                    DM us on our Instagram to know more.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="p-3 ">
                <AccordionTrigger className="text-xl font-bold">
                  How can I contact your team?
                </AccordionTrigger>
                <AccordionContent>
                  <p>You can reach us through:</p>
                  <ul>
                    {/* <li>Email: support@yourbrand.com</li> */}
                    {/* <li>Phone: +1 (123) 456-7890</li> */}
                    <li>Social Media: @rays._.digital on Instagram </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="p-3 ">
                <AccordionTrigger className="text-xl font-bold">
                  Can I request a completely customized solution?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, we specialize in tailoring designs to fit your unique
                    vision, preferences. Contact us for more dicussion.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </main>
  );
}