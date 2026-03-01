import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import "@styles/social.css";


const Social = () => {
    const phoneNumber = "573245735992";
    const message = "Hola Fernando, como estas? soy...";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  return (
    <div className="flex gap-4 mt-6 justify-center">

      <a 
        href="https://www.linkedin.com/in/fernando-perez-florez/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-glow linkedin"
      >
        <FaLinkedinIn />
      </a>

      <a 
        href="https://github.com/Nano1408"
        target="_blank"
        rel="noopener noreferrer"
        className="social-glow github"
      >
        <FaGithub />
      </a>

      <a 
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="social-glow whatsapp"
      >
        <FaWhatsapp />
      </a>

    </div>
  )
}

export default Social
