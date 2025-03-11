"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

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

          <div className="flex-col text-black md:h-[500px] md:w-[500px]  mx-auto p-5">
            <h1 className="text-2xl font-bold mb-2  ">Reach Out Here</h1>
            <div className="border-t border-4 w-36  border-[#1a1448]"></div>
            <p className="my-4 text-lg">Open for Work or any Suggestions!</p>
            <ul className="space-y-7 md:mt-16 mt-10">
              {/* <li className="flex items-center">
                <FaPhone className="text-[#4db564]" size={27}/>
                <span className="ml-3 text-lg md:text-2xl  font-semibold">Phone:</span>
                <span className="font-medium  ml-2 text-gray-700 hover:underline">
                  +923132480307
                </span>
              </li> */}
              <li className="flex items-center">
                <FaEnvelope className=" text-[#0072C6]" size={27} />
                <span className="ml-3 text-lg md:text-2xl  font-semibold">Email:</span>
                <span className="font-medium ml-2 text-gray-700 hover:underline">
                yumnashaiykh@gmail.com
                </span>
              </li>
              <li className="flex items-center">
                <FaLinkedin className=" text-blue-500" size={27}/>
                <span className="ml-3 text-lg md:text-2xl font-semibold">LinkedIn:</span>
                <span className="font-medium  ml-2">
                  <a
                    href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-gray-700  hover:underline"
                  >
                    linkedin.com/yumna-shaikh
                  </a>
                </span>
              </li>
              {/* <li className="flex items-center">
                <FaGithub className="text-[#463976]"size={27} />
                <span className="ml-3 text-lg md:text-2xl font-semibold">Github:</span>
                <span className="font-medium">
                  <a
                    href="https://github.com/yumnashaikh07"
                    className="text-gray-700 hover:underline">
                    https://github.com/yumnashaikh07
                  </a>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}