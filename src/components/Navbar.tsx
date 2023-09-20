// import { BsFillMoonStarsFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo1.png';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Scroll from 'react-scroll';
const Link = Scroll.Link;

export default function Navbar() {
  const [HamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!HamburgerOpen);
    if (HamburgerOpen === false) {
      document.body.style.overflow = 'hidden';
    } else if (HamburgerOpen === true) {
      document.body.style.overflow = 'unset';
    }
  };
  return (
    <nav className="flex font-roboto font-bold justify-between py-4 sm:px-5 px-7 z-30 text-xs items-start sticky top-0 bg-slate-800 w-full h-14">
      <div className="w-20 h-16 sm:-ml-1 overflow-hidden">
        <Link activeClass="active" smooth spy to="home">
          <img src={logo} className="object-contain" alt="LOGO" />
        </Link>
      </div>
      <div className="lg:hidden" onClick={toggleHamburger}>
        <GiHamburgerMenu
          className={`${HamburgerOpen ? 'hidden' : 'text-2xl text-amber-300'}`}
        />
        <AiFillCloseCircle
          className={`${HamburgerOpen ? 'text-3xl text-amber-300' : 'hidden'}`}
        />
      </div>
      <div
        className={`${
          HamburgerOpen
            ? 'mt-10 block fixed w-screen h-screen bg-gray-800 left-0 px-5 opacity-90 z-10 justify-between'
            : 'hidden'
        }`}>
        <ul className="flex text-xl flex-col justify-between text-justify py-10 pr-5 gap-5">
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="about"
              onClick={toggleHamburger}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="skills"
              onClick={toggleHamburger}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="portfolio"
              onClick={toggleHamburger}>
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="resume"
              onClick={toggleHamburger}>
              RESUME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="contact"
              onClick={toggleHamburger}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      <ul className="hidden lg:flex items-center sm:gap-1 gap-3 ">
        <li className="cursor-pointer hover:text-amber-300 active:text-teal-500">
          <Link activeClass="active" smooth spy to="about">
            ABOUT
          </Link>
        </li>
        <li className="cursor-pointer hover:text-amber-300 active:text-teal-500">
          <Link activeClass="active" smooth spy to="portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li className="cursor-pointer hover:text-amber-300 active:text-teal-500">
          <Link activeClass="active" smooth spy to="resume">
            RESUME
          </Link>
        </li>
        <li className="cursor-pointer hover:text-amber-300 active:text-teal-500">
          <Link activeClass="active" smooth spy to="contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
