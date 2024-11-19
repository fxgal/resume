import { FaGithub, FaRegEnvelope, FaTelegram, FaWhatsapp } from "react-icons/fa";
import profilePhoto from "../../assets/profile.jpg";
import "./profile-data.scss";

export default function ProfileData() {
  return (
    <div className="profile-data container flex flex-col content-center justify-center text-center">
      <img src={profilePhoto} alt="profile" className="avatar" />
      <h1 className="text-xl">Félix Galindo</h1>
      <h2>Software Engineer</h2>
      <address>San Juan de Los Morros, Venezuela</address>
      <div className="text-icon">
        <p>
          <FaRegEnvelope /> Email
        </p>
        <a href="mailto:fxgal.dev@gmail.com">fxgal.dev@gmail.com</a>
      </div>
      <div className="text-icon">
        <p>
          <FaTelegram /> Telegram
        </p>
        <a href="https://t.me/fxgal" target="_blank">
          t.me/fxgal
        </a>
      </div>
      <div className="text-icon">
        <p>
          <FaWhatsapp /> Whatsapp
        </p>
        <a href="https://wa.me/584125360034" target="_blank">
          Send
        </a>
      </div>
      <div className="text-icon">
        <p>
          <FaGithub /> Github
        </p>
        <a href="https://github.com/fxgal" target="_blank">
          Link
        </a>
      </div>
    </div>
  );
}
