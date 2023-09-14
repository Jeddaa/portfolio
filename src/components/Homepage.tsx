import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import MyPDF from '../assets/Fatihah Oduwole CV.pdf';

export default function Mainpage() {
  return (
    <div className="grid place-items-center py-24 px-[10%] mx-auto my-0 ">
      <div className="flex flex-col w-[90%]">
        <h3 className="text-xl">--Hello</h3>
        <h1 className="text-5xl sm:text-start sx:text-start md:text-4xl py-2 text-teal-600 font-medium">
          I'M <span className="text-amber-300">Fatihah Oduwole,</span>
        </h1>
        <p className="text-md py-5 text-grey-800">
          a software Engineer who is eager to contribute to your team and take
          on new challenges because I have a strong understanding of coding
          concepts and a dedication to providing value.
        </p>
        <button className="text-justify border w-fit p-2 mt-5 rounded-md hover:text-amber-300">
          <a href={MyPDF} download="FatihahOduwole.pdf">
            Download CV
          </a>
        </button>

        <div className="text-3xl flex justify-start gap-10 pt-16 text-grey-600">
          <a href="https://github.com/Jeddaa" target="_blank">
            <BsGithub />
          </a>
          <div
            onClick={(e) => {
              window.location.href = 'mailto:fathiato@gmail.com';
              e.preventDefault();
            }}
            className="cursor-pointer">
            <AiOutlineMail />
          </div>

          {/* <a href="mailto:fathiato@gmail.com">Contact</a> */}
          <a href="https://www.linkedin.com/in/fatihahoduwole/" target="_blank">
            <BiLogoLinkedin />
          </a>
        </div>
      </div>

      {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10">
        <img src={avatar} className="object-contain" />
      </div> */}
    </div>
  );
}
