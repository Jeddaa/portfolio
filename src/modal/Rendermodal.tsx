const Rendermodal = ({
  img,
  text,
  demo,
  github,
  stack
}: {
  img: string;
  text: string;
  demo: string;
  github: string;
  stack: Array<string>;
}) => {
  return (
    // <div className="  ">
    <div className="flex flex-col gap-3 w-full">
      <div className="w-full mt-2 ">
        <img src={img} className="object-cover" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col lgm:flex-row lgm:gap-5 gap-3 w-full">
          <p className="text-justify p-1 lgm:w-3/4">{text}</p>
          <div className="flex justify-start items-start gap-3 lgm:w-1/3">
            {stack.map((item, index) => {
              return (
                <button
                  key={index}
                  className="border rounded-lg p-2 text-left text-lg"
                  disabled>
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`${
            demo ? 'flex justify-between' : 'flex justify-end h-1/6'
          }`}>
          <button className="border rounded-lg p-2">
            <a href={github} target="_blank">
              See Github
            </a>
          </button>
          {demo && <button className="border rounded-lg p-2">See Demo</button>}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Rendermodal;
