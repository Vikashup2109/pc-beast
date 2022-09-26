import React from "react";

const About = () => {
  return (
    <>
      <div className="w-11/12 tablet:w-10/12 desktop:w-3/5 py-6 justify-center text-white mx-auto">
        <div className="my-3">
          <span className="font-mono font-bold text-2xl tracking-widest justify-center">
            About
          </span>
        </div>
        <div className="mx-6 tablet:mx-12 my-10">
          <span className="text-sm font-mono">
            Hey! I'm Pavnesh. I am a Full Stack Developer based in India. I am
            part of <a target="_blank" rel="noreferrer" href="https://fossasia.org/">FOSSASIA</a>'s{" "}
            <a target="_blank" rel="noreferrer" href="https://github.com/fossasia/open-event-frontend">
              Open-Event
            </a>{" "}
            core team. This project is responsible for running{" "}
            <a href="https://eventyay.com">eventyay.com</a>, an open-source event
            management, hosting and ticketing solution. I am currently a final
            year undergraduate student at{" "}
            <a href="https://iiitkota.ac.in/">
              Indian Institute of Information Technology, Kota
            </a>
            . Apart from looking at a lot of code online I also like to read
            fiction. I am a big fan of {"{Khaled Hosseini, Haruki Murakami}"}'s
            works. I am interested in Psychology, Robotics, Machine Learning, AI
            and a lot of other things. And yeah, I bow to our{" "}
            <a href="https://www.youtube.com/watch?v=BLScQt2e9EE">
              Digital overlords
            </a>
            .
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
