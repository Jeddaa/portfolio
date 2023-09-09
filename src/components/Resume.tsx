export default function Resume() {
  return (
    <div className="flex flex-col font-roboto justify-center mx-auto my-0 items-center bg-[#161922] p-10">
      <h2 className="text-center text-5xl text-amber-300">Resume</h2>
      <p className="mt-3 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, id.
      </p>
      <div className="flex gap-8 pt-5 sm:flex-col sx:flex-col w-11/12 lg:w-5/6">
        <div className="flex flex-col sm:w-11/12 sx:w-11/12 w-1/2 gap-2 shadow-lg">
          <div className="flex flex-col gap-3">
            <h2 className="text-start text-white text-2xl pl-5">Education:</h2>
            <div className="flex flex-col gap-3">
              <div className="shadow-lg bg-slate-900 p-5 flex leading-6 gap-3 flex-col">
                <p className="font-light">2023</p>
                <h3 className="text-amber-300 font-bold">
                  Software Development
                </h3>
                <p className="text-justify">
                  A full time programme that required 100+ hours mastering
                  algorithms, data structures, and full-stack development while
                  simultaneously developing projects with Ruby, Rails,
                  JavaScript, React, and Redux.
                </p>
                <p>
                  Developing skills in remote pair programming using GitHub,
                  industry-standard git-flow, and daily standups to communicate
                  and collaborate with international remote developers.
                </p>
                <h4 className="text-amber-300">
                  Microverse Online Training School
                </h4>
              </div>
            </div>
            <div className="shadow-lg bg-slate-900 p-5 flex leading-6 gap-3 flex-col">
              <p className="font-light">2022</p>
              <h3 className="text-amber-300 font-bold">
                Diploma, Software Engineering
              </h3>
              <p className="text-justify">
                A diploma in software engineering, which prioritize teamwork to
                help grasp the theoretical and practical aspects of programming.
              </p>
              <h4>ALX-Holberton School</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 sm:w-11/12 sx:w-11/12 gap-2 shadow-lg">
          <div className="flex flex-col gap-3">
            <h2 className="text-start text-white text-2xl pl-5">Experience:</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="shadow-lg bg-slate-900 p-5 flex leading-6 gap-2 flex-col">
              <p className="font-light"> 2023</p>
              <h3 className="text-amber-300 font-bold">
                Backend Developer Intern
              </h3>
              <p className="text-justify">
                Integrated payment gateways in web apps to enable recurring
                debits and ensured that it only occurs in required accounts to
                avoid indiscriminate funds withdrawal.
              </p>
              <p>
                Achieved higher satisfaction and better feedback by developing
                positive connections with developers through excellent
                communication, empathy, and crisis management.
              </p>
              <h4 className="text-amber-300">TechBeaver</h4>
            </div>
            <div className="shadow-lg bg-slate-900 p-5 flex leading-6 gap-2 flex-col">
              <p className="font-light">2023</p>
              <h3 className="text-amber-300 font-bold">Freelance Instructor</h3>
              <p className="text-justify">
                Assisted students to hone their programming skills by teaching
                them technical concepts.
              </p>
              <p>
                Ensured that in just 16 weeks of mentoring, students went from
                having no experience with coding to independently designing
                APIs.
              </p>
              <h4>Code First Girls</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
