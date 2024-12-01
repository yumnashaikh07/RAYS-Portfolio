import { FaEnvelope, FaPhone, FaLinkedin,  FaGithub} from "react-icons/fa";

const ContactIcons = () => {
  return (
    <main><h1 className='text-3xl ml-16 font-bold '>GET TO KNOW MORE</h1>
    <section className=" mt-3 p-5 text-black flex">
    
      <a
        href="mailto:yumnashaiykh@gmail.com"
        aria-label="Email"
      >
        <FaEnvelope size={31} className="ml-10 text-[#4db564] hover:text-white"/>
      </a>
      <a
        href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={35} className="ml-16 text-blue-600 hover:text-white" />
      </a>
      <a
        href="tel:+923132480307"
        aria-label="Phone"
      >
        <FaPhone size={31} className="ml-[65px]  text-blue-700 hover:text-white" />
       
      </a>
      <a
        href="https://github.com/yumnashaikh07"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className=" text-[#463976] hover:text-white"
      >
        <FaGithub size={37}  className="ml-16 mr-3 md:mr-0" />
      </a>

      </section>
      <section className="font-semibold text-black flex ">
      <div className="ml-14 hover:text-[#1f4676]">Email</div>
      <div className="ml-11 hover:text-[#1f4676]">LinkedIn</div>
      <div className="ml-12 hover:text-[#1f4676]">Phone</div>
      <div className="ml-9 hover:text-[#1f4676] mr-3 md:mr-0">Github</div>
      </section>
    </main>
  );
};

export default ContactIcons;

