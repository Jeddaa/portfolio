import { AiFillGithub } from 'react-icons/ai';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

const Rendermodal = ({
  img,
  title,
  text,
  demo,
  github,
  stack
}: {
  img: string;
  title: string;
  text: string;
  demo: string;
  github: string;
  stack: Array<string>;
}) => {
  return (
    <div className=" shadow-lg rounded-md">
      <div className="p-1">
        <img src={img} className=" h-full w-full object-cover rounded-sm" />
      </div>
      <div className="flex justify-between">
        <div className=" flex flex-col mt-1 gap-4">
          <h1 className="text-3xl">{title}</h1>
          <div className="flex justify-start gap-3 mb-2 flex-wrap">
            {stack.map((item, index) => {
              return (
                <button
                  key={index}
                  className="border border-slate-700 shadow-lg rounded-md p-1 text-center min-w-fit text-base bg-slate-700 "
                  disabled>
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:flex gap-3 pt-2">
          <a href={github} target="_blank" aria-label="Github">
            <button className="border rounded-md p-2 flex gap-2 hover:bg-slate-500">
              See Source <AiFillGithub className="mt-1" />
            </button>
          </a>
          {demo && (
            <a href={demo} target="_blank" aria-label="Demo">
              <button className="border rounded-md p-2 flex gap-2 hover:bg-slate-500">
                See Live <BsFillArrowUpRightSquareFill className="mt-1" />
              </button>
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col lgm:gap-5 gap-3 w-full">
          <p className="text-justify">{text}</p>
        </div>

        <div className="lg:hidden flex gap-3">
          <button className="border rounded-lg p-2 hover:bg-slate-500">
            <a
              href={github}
              target="_blank"
              className="flex gap-2"
              aria-label="Github">
              See Source <AiFillGithub className="mt-1" />
            </a>
          </button>
          {demo && (
            <button className="border rounded-lg p-2 hover:bg-slate-500">
              <a
                href={demo}
                target="_blank"
                className="flex gap-2"
                aria-label="Demo">
                See Live <BsFillArrowUpRightSquareFill className="mt-1" />
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rendermodal;
