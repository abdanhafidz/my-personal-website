"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="first-section" id="skills">
      <div className="middle">
        <div className="big-circle"></div>
        <h1 className="title-name" data-aos="fade-right">
          My Skills
        </h1>
        <br />
        <div className="skill-group">
          <div className="middle-sub-6">
            <h2 className="skills-title">A.I/ML Engineering</h2>
          </div>
          <div className="middle-sub-4">
            <div className="sub-bar-img">
              {[
                "py.png",
                "pytorch.png",
                "tensorflow.png",
                "scikit.png",
                "sns.png",
                "replicate.png",
                "hf.png"
              ].map((img, index) => (
                <Image
                  key={index}
                  src={`/${img}`}
                  alt={img.split(".")[0]}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="sub-bar">
            <div className="bar-be"></div>
          </div>
        </div>

        <div className="skill-group">
          <div className="middle-sub-6">
            <h2 className="skills-title">Backend-Development</h2>
          </div>
          <div className="middle-sub-4">
            {" "}
            <div className="sub-bar-img">
              {[
                "php.png",
                "ts.png",
                "be-3.png",
                "mysql.png",
                "ci.png",
                "exp.png",
                "prisma.png",
                "pgree.png",
                "py.png",
                "lara.png",
                "go.png",
              ].map((img, index) => (
                <Image
                  key={index}
                  src={`/${img}`}
                  alt={img.split(".")[0]}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="sub-bar">
            <div className="bar-be"></div>
          </div>
        </div>
        <div className="skill-group">
          <div className="middle-sub-6">
            <h2 className="skills-title">Competitive Programming</h2>
          </div>
          <div className="middle-sub-4">
            {" "}
            <div className="sub-bar-img">
              <Image src="/icon-cpp.png" alt="C++" width={50} height={50} />
              <Image src="/py.png" alt="Python" width={50} height={50} />
            </div>
          </div>
          <div className="sub-bar">
            <div className="bar-cp" data-aos="loading"></div>
          </div>
        </div>
        <div className="skill-group">
          <div className="middle-sub-6">
            <h2 className="skills-title">Dev Ops</h2>
          </div>
          <div className="middle-sub-4">
            {" "}
            <div className="sub-bar-img">
              {["github.png", "docker.png", "aws.png"].map((img, index) => (
                <Image
                  key={index}
                  src={`/${img}`}
                  alt={img.split(".")[0]}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="sub-bar">
            <div className="bar-fe"></div>
          </div>
        </div>
        <div className="skill-group">
          <div className="middle-sub-6">
            <h2 className="skills-title">Frontend-Development</h2>
          </div>
          <div className="middle-sub-4">
            <div className="sub-bar-img">
              {[
                "fe-1.png",
                "fe-2.png",
                "ts.png",
                "jquery.png",
                "wp.png",
                "next.png",
              ].map((img, index) => (
                <Image
                  key={index}
                  src={`/${img}`}
                  alt={img.split(".")[0]}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="sub-bar">
            <div className="bar-fe"></div>
          </div>
        </div>
        <div className="skill-group">
          <div className="middle-sub-6">
            <h2 className="skills-title">Graphic & UI/UX Design </h2>
          </div>
          <div className="middle-sub-4">
            <div className="sub-bar-img">
              {["gd-1.png", "gd-2.png"].map((img, index) => (
                <Image
                  key={index}
                  src={`/${img}`}
                  alt={img.split(".")[0]}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>

          <div className="sub-bar">
            <div className="bar-gd"></div>
          </div>
        </div>
        <div className="big-circle-left"></div>
      </div>
    </div>
  );
};

export default Skills;
