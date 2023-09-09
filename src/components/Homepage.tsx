// import avatar from '../assets/avatar.png';
// import avatar from '../assets/finegeh.png';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

export default function Mainpage() {
  return (
    <div className="text-justify flex flex-col p-10">
      <h3 className="text-xl">--Hello</h3>
      <h1 className="text-5xl sm:text-start sx:text-start md:text-4xl py-2 text-teal-600 font-medium">
        I'M <span className="text-amber-300">Fatihah Oduwole,</span>
      </h1>
      <p className="text-md py-5 text-grey-800">
        a software Engineer who is eager to contribute to your team and take on
        new challenges because I have a strong understanding of coding concepts
        and a dedication to providing value.
        {/* with strong foundation in programming
        fundamentals and a passion for technology and committed to producing
        high-quality web applications. Also willing to work around the globe. */}
      </p>
      <button className="text-justify border w-fit p-2 mt-5 rounded-md">
        Resume
      </button>

      <div className="text-3xl flex justify-start gap-10 pt-16 text-grey-600">
        <BsGithub />
        <AiOutlineMail />
        <BiLogoLinkedin />
      </div>
      {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10">
        <img src={avatar} className="object-contain" />
      </div> */}
    </div>
  );
}
