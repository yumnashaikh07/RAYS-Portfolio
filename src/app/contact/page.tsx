"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { AiOutlineArrowDown } from "react-icons/ai";
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

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("Cp1U6sjzrRcIQYZuJ"); 
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_umm79sr",  
        "template_4gvmrak",  // service_3gls27k
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
      <h1 className="font-extrabold md:text-5xl text-3xl flex justify-center my-11 ">
        CONTACT HERE
        <AiOutlineArrowDown className="md:ml-7" />
      </h1>
      <div className="md:min-h-screen flex justify-center items-center md:p-20">
        <div className="md:w-full md:max-w-4xl flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden">
          <div className=" md:w-1/2 p-8 bg-gradient-to-r   from-[#213e9f] via-[#4762bd] via-[#3790c7]  via-[#bbbad2] via-[#c9c7bc] to-[#c9c7bc] text-black">
            <h2 className="text-2xl font-bold mb-6">Send Message Here</h2>
            {submitted && (
              <p className="mb-4 text-blue-900">Message sent successfully!</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1  font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-1 text-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-1 text-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm  font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full py-1 text-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm  font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full py-1 text-black"
                  rows={4}
                  required
                />
              </div>
              <button
                className=" bg-[#1f4676] mx-auto flex justify-center  font-semibold text-white px-5 py-2 rounded hover:bg-[#d4d3ca]"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
      
  <section className="md:px-0 px-10 w-full max-w-[500px] flex-shrink-0">
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
          We specialize in premium home décor products and personalized interior
          design services. Whether you&apos;re looking for unique pieces to
          enhance your space or need expert guidance to transform your home,
          we&apos;ve got you covered.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5"  className="p-3 ">
      <AccordionTrigger className="text-xl font-bold">
        What makes your products and services unique?
      </AccordionTrigger>
      <AccordionContent>
        <p>
          Our products are carefully curated for quality, style, and
          sustainability. Our interior design services focus on creating
          functional and aesthetically pleasing spaces tailored to your
          preferences.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7"  className="p-3 ">
      <AccordionTrigger className="text-xl font-bold">
        How can I contact your team?
      </AccordionTrigger>
      <AccordionContent>
        <p>You can reach us through:</p>
        <ul>
          <li>Email: support@yourbrand.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Social Media: @yourbrand on Instagram and Facebook</li>
        </ul>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-9"  className="p-3 ">
      <AccordionTrigger className="text-xl font-bold">
        Can I request a completely customized solution?
      </AccordionTrigger>
      <AccordionContent>
        <p>
          Yes, we specialize in tailoring designs to fit your unique vision,
          preferences.
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