import { FaEnvelope, FaPhone, FaLinkedin,  FaGithub} from "react-icons/fa";

const ContactIcons = () => {
  return (
    <main><h1 className='text-3xl md:ml-14 mx-auto font-bold '>GET TO KNOW MORE</h1>
    <section className=" mt-3 p-5  text-black flex">
    
      <a
        href="mailto:yumnashaiykh@gmail.com"
        aria-label="Email"
      >
        <FaEnvelope size={31} className="md:ml-10 text-[#4db564] hover:text-white"/>
      </a>
      <a
        href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={35} className="md:ml-16 ml-10 text-blue-600 hover:text-white" />
      </a>
      <a
        href="tel:+923132480307"
        aria-label="Phone"
      >
        <FaPhone size={31} className="md:ml-14 ml-10 text-blue-700 hover:text-white" />
       
      </a>
      <a
        href="https://github.com/yumnashaikh07"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className=" text-[#463976] hover:text-white"
      >
        <FaGithub size={37}  className="md:ml-11 ml-8" />
      </a>

      </section>
      <section className="font-semibold  text-black flex ">
      <div className="md:ml-14 ml-3  hover:text-[#1f4676]">Email</div>
      <div className="md:ml-11 ml-5 hover:text-[#1f4676]">LinkedIn</div>
      <div className="md:ml-7 ml-5 hover:text-[#1f4676]">Phone</div>
      <div className="md:ml-7 ml-5 hover:text-[#1f4676] ">Github</div>
      </section>
    </main>
  );
};

export default ContactIcons;

