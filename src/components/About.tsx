'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="first-section">
        <h1 className="title-name" data-aos="fade-up" data-aos-duration="1000">
          Hi, I &apos; m Abdan Hafidz
        </h1>
        <h1 className="title-name" data-aos="fade-up" data-aos-duration="1000">
          A.I/ML Ops & Software Engineer
        </h1>
        <div className="dynamic-middle">
          <a href="#about">
            <button className="btn-primary">More About Me</button>
          </a>
        </div>
      </div>
<div className="grid1" />
      <h1 className="text-center title-name">I also do</h1>
      <div className="alsodo">
        <div className="cp">
          <h1 className="text-danger title-name">
            <li>Computer Science Teaching</li>
          </h1>
        </div>
        <div className="infor">
          <h1 className="text-info title-name">
            <li>Competitive Programming</li>
          </h1>
        </div>
        <div className="cr">
          <h1 className="text-success title-name">
            <li>Content Creator</li>
          </h1>
        </div>
      </div>
      <div className="grid2" />
      <div className="second-section" id="about">
        <h1 className="text-center title-name" data-aos="flip-left" data-aos-duration="1000">
          Abdan Hafidz, Glad To See You!
        </h1>
        <p className="text-center code-pro text-bold">
          🎓 A.I Engineering - ITS University Indonesia |  INDONESIA & ENGLISH
        </p>
        <p className="text-center text-primary" data-aos="fade-right" data-aos-duration="1000">
        I am Abdan Hafidz, an A.I. Engineering student at Institut Teknologi Sepuluh Nopember (ITS) Surabaya, with 5 years of experience in Software Engineering and 2 years of experience in teaching. I am actively involved in A.I/ML research and software development projects, specializing in backend development and system architecture. Beyond academics, I am passionate about education, mentoring high school students in Olympiad-level Informatics and preparing them for university entrance exams in Mathematics and Logic. With a strong ability to adapt quickly and excel in learning, I thrive in mastering multiple fields simultaneously, making me highly versatile in both technical and educational domains.
        </p>
        <div className="middle ctc text-center">
        <div className="middle-sub-4">
            <Link href="https://github.com/abdanhafidz" target="_blank">
              <button className="btn-white-oval btn-rip ripple">Github</button>
            </Link>
          </div>
          <div className="middle-sub-4">
            <Link href="https://codeforces.com/profile/mengCP" target="_blank">
              <button className="btn-white-oval btn-rip ripple">My Codeforces</button>
            </Link>
          </div>
          <div className="middle-sub-4">
            <Link href="https://tlx.toki.id/profiles/abdan123" target="_blank">
              <button className="btn-white-oval btn-rip ripple">TLX</button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}