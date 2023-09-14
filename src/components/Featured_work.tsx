// import Avatar from '../assets/test.png';
import { useState } from 'react';
import bookstore from '../assets/projects/bookstore.png';
import MyModalContent from '../modal/Modal';

const FeaturedWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (isModalOpen === false) {
      document.body.style.overflow = 'hidden';
    }
  };
  return (
    <div className=" p-10" id="portfolio">
      <h1 className="text-center text-5xl text-amber-300">Featured Work</h1>
      <div className="grid lgm:grid-cols-3 sm:grid-cols-1 grid-cols-2 py-7 mx-auto my-0 gap-4 w-9/12">
        <div className="flex flex-col gap-1">
          <img src={bookstore} className="h-44 w-44 lgm:w-72 lgm:h-72" />
          <h3 className="text-xl">Bookstore</h3>
          <div className="flex gap-2 text-sm text-amber-300">
            <p>React</p>
            <p>Css</p>
          </div>
          <button
            className="border p-2 rounded-lg w-fit text-start"
            onClick={openModal}>
            See More
          </button>
          <MyModalContent
            isOpen={isModalOpen}
            closeModal={closeModal}
            bookstore={bookstore}
            demo={true}
            stack={['React', 'Css']}
          />
        </div>
        <div className="flex flex-col gap-1">
          <img src={bookstore} className="h-44 w-44 lgm:w-72 lgm:h-72" />
          <h3 className="text-xl">Bookstore</h3>
          <div className="flex gap-2 text-sm text-amber-300">
            <p>React</p>
            <p>Css</p>
          </div>
          <button
            className="border p-2 rounded-lg w-fit text-start"
            onClick={openModal}>
            See More
          </button>
          <MyModalContent
            isOpen={isModalOpen}
            closeModal={closeModal}
            bookstore={bookstore}
            demo={true}
            stack={['React', 'Css']}
          />
        </div>
        <div className="flex flex-col gap-1">
          <img src={bookstore} className="h-44 w-44 lgm:w-72 lgm:h-72" />
          <h3 className="text-xl">Bookstore</h3>
          <div className="flex gap-2 text-sm text-amber-300">
            <p>React</p>
            <p>Css</p>
          </div>
          <button
            className="border p-2 rounded-lg w-fit text-start"
            onClick={openModal}>
            See More
          </button>
          <MyModalContent
            isOpen={isModalOpen}
            closeModal={closeModal}
            bookstore={bookstore}
            demo={true}
            stack={['React', 'Css']}
          />
        </div>
        <div className="flex flex-col gap-1">
          <img src={bookstore} className="h-44 w-44 lgm:w-72 lgm:h-72" />
          <h3 className="text-xl">Bookstore</h3>
          <div className="flex gap-2 text-sm text-amber-300">
            <p>React</p>
            <p>Css</p>
          </div>
          <button
            className="border p-2 rounded-lg w-fit text-start"
            onClick={openModal}>
            See More
          </button>
          <MyModalContent
            isOpen={isModalOpen}
            closeModal={closeModal}
            bookstore={bookstore}
            demo={true}
            stack={['React', 'Css']}
          />
        </div>
        <div className="flex flex-col gap-1">
          <img src={bookstore} className="h-44 w-44 lgm:w-72 lgm:h-72" />
          <h3 className="text-xl">Bookstore</h3>
          <div className="flex gap-2 text-sm text-amber-300">
            <p>React</p>
            <p>Css</p>
          </div>
          <button
            className="border p-2 w-fit text-start rounded-lg"
            onClick={openModal}>
            See More
          </button>
          <MyModalContent
            isOpen={isModalOpen}
            closeModal={closeModal}
            bookstore={bookstore}
            demo={true}
            stack={['React', 'Css']}
          />
        </div>
        <div className="flex flex-col gap-1">
          <img src={bookstore} className="h-44 w-44 lgm:w-72 lgm:h-72" />
          <h3 className="text-xl">Bookstore</h3>
          <div className="flex gap-2 text-sm text-amber-300">
            <p>React</p>
            <p>Css</p>
          </div>
          <button
            className="border p-2 w-fit text-start rounded-lg"
            onClick={openModal}>
            See More
          </button>
          <MyModalContent
            isOpen={isModalOpen}
            closeModal={closeModal}
            bookstore={bookstore}
            demo={true}
            stack={['React', 'Css']}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
