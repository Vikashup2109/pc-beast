import React from "react";
import Card from "../elements/Card";

const Projects = () => {
  const projects = {
    first: {
      id: 1,
      heading: "Placement Portal - IIIT Kota",
      description:
        "A web app to smoothen the placement process with minimal manual intervention. Key Features: Student and Coordinator Management; Company Registration and Recruitment Management, Automated Placements Statistics Generation. Gets 700K hits per month.",
      tech: "Next.js | Tailwind CSS | MEAN Stack | Azure",
    },
    second: {
      id: 2,
      heading: "BBB-Download",
      description:
        "The goal of this project is to enable the export of video and presentations from BigBlueButton instances.",
      tech: "Python | Flask | BBB API",
    },
    third: {
      id: 3,
      heading: "Road Safety Teaching Assistant",
      description:
        "Developed a system for Sahayta Jaipur (NGO) that uses NLP for helping the teachers in teaching road safety in schools.",
      tech: "Gensim | Word2Vec | Snowboy | RPi",
    },
    fourth: {
      id: 4,
      heading: "Zine Chat",
      description:
        "It was being used as a communication channel for resolving doubts during robotics workshops for juniors.",
      tech: "NodeJS | Socket.io | MongoDB | Express | React | Flutter",
    },
    fifth: {
      id: 5,
      heading: "ORB_SLAM2 -(Updated OpenCV)",
      description:
        "A monocular SLAM system for RGB-D cameras. It computes the camera trajectory and a sparse 3D reconstruction of the scene in real-time.",
      tech: "C++ | ROS | OpenCV",
    },
  };

  return (
    <>
      <div className="w-11/12 tablet:w-10/12 desktop:w-3/5 py-6 justify-center text-white mx-auto">
        <div className="my-3">
          <span className="font-mono font-bold text-2xl tracking-widest">
            Projects
          </span>
        </div>
        <div className="mx-8 mid:mx-12 my-12">
          <div className="grid grid-cols-1 mid:grid-cols-2 gap-8">
            {Object.values(projects).map((project) => {
              return <Card key={project.id} project={project} />;
            })}

            {/* Last Card Start */}
            <div className="flex flex-col text-white bg-zinc-900 rounded-lg space-y-6 p-8 mid:p-16">
              <span className="text-xl font-mono font-bold">
                Find Out more projects
              </span>

              <span className="text-sm font-mono my-4 opacity-75 space-x-3 my-auto">
                <span className="align-bottom">on my Github...</span>
                <a
                  href="https://github.com/pc-beast"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bx-link-external bx-sm hover:opacity-100"></i>
                </a>
              </span>
            </div>
            {/* Last Card Ends */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
