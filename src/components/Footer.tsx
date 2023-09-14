import { AiOutlineArrowUp, AiOutlineCopyrightCircle } from 'react-icons/ai';
import {
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoTypescript
} from 'react-icons/bi';
import Scroll from 'react-scroll';
const Link = Scroll.Link;

const Footer = () => {
  return (
    <div className="flex flex-col text-xs text-white items-center justify-center gap-1 py-3">
      <div className="gap-2">
        <h5 className="text-center">Built with:</h5>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <span className="object-cover pb-1 flex items-end">
              <BiLogoReact />
            </span>
            <p>React</p>
          </div>
          <div className="flex gap-1">
            <span className="object-cover pb-1 flex items-end">
              <BiLogoTypescript />
            </span>
            <p>TypeScript</p>
          </div>
          <div className="flex gap-1">
            <span className="object-cover pb-1 flex items-end">
              <BiLogoTailwindCss />
            </span>
            <p>Tailwindcss</p>
          </div>
        </div>
      </div>
      <div className="flex gap-1 text-xs">
        <span className="object-cover pb-0.5 flex items-end">
          <AiOutlineCopyrightCircle />
        </span>
        <p>Fatihah Oduwole,</p>
        <p>2023</p>
        <p>All rights Reserved.</p>
        <Link activeClass="active" smooth spy to="home">
          <AiOutlineArrowUp className=" text-lg absolute right-0 pr-1" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
