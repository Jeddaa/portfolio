import Avatar from '../assets/test.png';
const FeaturedWork = () => {
  return (
    <div className=" p-5">
      <h1 className="text-center text-5xl text-amber-300">Featured Work</h1>
      <div className="grid grid-cols-3 sm:grid-cols-1 py-7 mx-auto my-0 gap-3 w-9/12">
        <div className="">
          <a>
            <img src={Avatar} />
          </a>
        </div>
        <div>
          <a>
            <img src={Avatar} />
          </a>
        </div>
        <div>
          <a>
            <img src={Avatar} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
