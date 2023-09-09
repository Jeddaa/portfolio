import { BsFillMoonStarsFill } from 'react-icons/bs';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="flex justify-between py-4 sm:px-5 px-7 text-xs items-start">
      <div className="w-20 h-16 sm:-ml-1 overflow-hidden">
        <img src={logo} className="object-contain" alt="LOGO" />
      </div>
      <ul className="flex items-center sm:gap-1 gap-3">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer" />
        </li>

        <li>ABOUT</li>
        <li>PORTFOLIO</li>
        <li>
          <a className="" href="#resume">
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
}
