const About = () => {
  return (
    <div className="flex flex-col  p-5 mt-10 8 rounded-xl" id="about">
      <div className="bg-[#161922] py-10 px-[10%] shadow-lg rounded-xl">
        <h1 className="text-3xl text-amber-300">About Me</h1>
        <div className="flex gap-2 py-3">
          <span className="sm:hidden -mt-0.5">___ </span>
          <p className="text-justify leading-8">
            I come with a strong background in programming and a strong passion
            for technology. I've worked on a variety of projects both
            individually and in teams, showcasing flexibility, effective
            communication, teamwork skill and effective problem-solving. My
            skills have been honed through internships, and my coding expertise
            and passion makes me eager to take on new tasks and contribute to
            your team. I fondly anticipate working in a challenging yet
            rewarding organization to attain it visions for personal growth.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
