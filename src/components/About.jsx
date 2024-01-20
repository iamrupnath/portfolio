import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-2">
          Hi, I'm an aspiring Frontend Developer and content creator with a
          148k+ Instagram following. I hold a B.TECH degree in Computer Science
          and Engineering from GNIT, Kolkata. Proficient in JavaScript,
          HTML/CSS, Git/Github, Java, SQLand ReactJs, I have a 5 ⭐
          HackerRank rating and a proven track record of tackling challenges.
        </p>

        <br />

        <p className="text-xl">
          As a content creator, I bring valuable communication and presentation
          skills, simplifying complex technical concepts. Dedicated and
          detail-oriented, I excel in creating user-friendly interfaces with a
          strong eye for design. My collaborative nature extends to
          brainstorming and implementing innovative solutions with teams.
        </p>

        <br />

        <p className="text-xl">
          Eager to connect and contribute to a dynamic organization that values
          creativity, I am open to opportunities as a passionate Frontend
          Developer or content creator. For collaborations or queries, feel free
          to reach out to me at rupnathshaw@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default About;
