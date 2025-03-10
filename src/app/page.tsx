"use client";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "@/components/About";
import ProjectsGrid from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences"; // Import Experiences
import Skills from "@/components/Skills"; // Import Skills
import Contact from "@/components/Contact";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Abdan Hafidz - Portfolio</title>
        <meta name="description" content="Portofolio Abdan Hafidz" />
      </Head>
      <Navbar />
      <main className="sabeb">
        <About />
        <Skills />
        <Experiences /> 
        <ProjectsGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
