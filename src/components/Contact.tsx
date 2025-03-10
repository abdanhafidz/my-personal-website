"use client";

import Image from "next/image";
import GithubIcon from "../../public/Githubi.png";
import LinkedInIcon from "../../public/LinkedIni.png";
import EmailIcon from "../../public/Emaili.png";
import InstagramIcon from "../../public/Instagrami.png";

export default function Contact() {
  return (
    <div className="first-section services">
      <h1 className="text-center title-name">Get In Touch</h1>
      <p className="text-center">
        I &apos; m currently looking for any new opportunities, my inbox is always open. <br />
        Whether you have a question or just want to say hi, I &apos; ll try my best to get back to you!
      </p>
      <br />

      <div className="btn-middle">
        <div className="socials">
          <a href="https://github.com/abdanhafidz" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
            <Image src={GithubIcon} alt="GitHub" width={40} height={40} />
          </a>
          <a href="https://www.linkedin.com/in/abdan-hafidz-909113163" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
            <Image src={LinkedInIcon} alt="LinkedIn" width={40} height={40} />
          </a>
          <a href="mailto:abdan.hafidz@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
            <Image src={EmailIcon} alt="Email" width={40} height={40} />
          </a>
          <a href="https://instagram.com/abdan_hafidz" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
            <Image src={InstagramIcon} alt="Instagram" width={40} height={40} />
          </a>
        </div>
        <br />

        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=62895601077613&text=Halo%20Abdan,%20saya%20ingin%20melakukan%20diskusi%20anda%20terkait%20projek%20berikut%20%5Bsilahkan%20jelaskan%20keperluan%20anda%5D"
          rel="noopener noreferrer"
        >
          <button className="btn-primary-outline">Contact Me</button>
        </a>
      </div>
    </div>
  );
}
