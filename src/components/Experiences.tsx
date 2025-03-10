"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExperienceType } from "@/lib/Experiences";

const Experiences = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchExperiences = async () => {
      try {
        const response = await fetch("/metadata/experiences.json");
        if (!response.ok) throw new Error("Failed to fetch experiences data");

        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error(`Error loading experiences: ${error}`);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 p-4 bg-gray-900/50 rounded-lg shadow-lg">
      <h1 className="title-name title-port text-center">My Experiences</h1>
      <ul className="timeline" id="portfolio">
        {experiences.map((exp, index) => (
          <li key={index} data-aos="zoom-in-up" data-aos-duration="1000">
            <div
              className={`${index % 2 === 0 ? "direction-r" : "direction-l"} transition-transform hover:scale-105 hover:shadow-lg`}
            >
              <div className="flag-wrapper">
                <span className="flag">{exp.title}</span>
                <span className="time-wrapper">
                  <span className="time">{exp.time}</span>
                </span>
              </div>
              <div className="desc">
                At{" "}
                <a
                  className="text-white underline hover:text-gray-300"
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>{exp.organization}</strong>
                </a>
                , {exp.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;
