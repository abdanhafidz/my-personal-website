"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ProjectType, ProjectCategoryType } from "../lib/Projects";

// Komponen Projects yang benar
function Projects({ fileName }: { fileName: string }) {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`/metadata/projects/${fileName}.json`);
        if (!response.ok) throw new Error("Failed to fetch project data");

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(`Error loading projects: ${error}`);
      }
    };

    fetchProjects();
  }, [fileName]);

  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="card-projects">
          <Link href={project.href} className="link-none">
            <Image
              src={project.imgSrc}
              alt={project.title}
              width={400}
              height={250}
              className="project-image"
            />
            <h4>{project.title}</h4>
            <h5 className="card-projects-description">{project.description}</h5>
          </Link>
        </div>
      ))}
    </>
  );
}

// Komponen untuk kategori proyek
function RadioGroup({
  metaCategory,
  setCurrentFileName,
}: {
  metaCategory: ProjectCategoryType;
  setCurrentFileName: (fileName: string) => void;
}) {
  return (
    <div
      className="radio-group"
      onClick={() => setCurrentFileName(metaCategory.file_name)}
    >
      <div className="radio-projects" id={metaCategory.file_name}></div>
      <div className="radio-text">{metaCategory.category}</div>
    </div>
  );
}

// Komponen utama untuk mengelola kategori
function ProjectCategory({
  setCurrentFileName,
}: {
  setCurrentFileName: (fileName: string) => void;
}) {
  const [metaData, setMetaData] = useState<ProjectCategoryType[]>([]);

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const response = await fetch("/metadata/projects/projects_metadata.json");
        if (!response.ok) throw new Error("Failed to fetch project metadata");

        const data = await response.json();
        setMetaData(data);
      } catch (error) {
        console.error(`Error loading project metadata: ${error}`);
      }
    };

    fetchMetaData();
  }, []);

  return (
    <>
      {metaData.map((data, index) => (
        <RadioGroup key={index} metaCategory={data} setCurrentFileName={setCurrentFileName} />
      ))}
    </>
  );
}

// Komponen utama yang mengelola state
export default function ProjectsGrid() {
  const [currentFileName, setCurrentFileName] = useState("landing_page");

  return (
    <div className="first-section">
    <div className="middle-sub-6" id="projects">
      <h1 className="title-name">My Projects</h1>
      <p className="text-primary">Some Things I’ve Built</p>
      <div className="radio-group-container">
        <ProjectCategory setCurrentFileName={setCurrentFileName} />
      </div>
      </div>
      <div className="middle-sub-4 fit" id="pro-dom">
        <div className="grid-projects">
          <Projects fileName={currentFileName} />
        </div>
      </div>
      </div>
  );
}
