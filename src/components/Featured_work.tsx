// import Avatar from '../assets/test.png';
import { useState } from 'react';
import bookstore from '../assets/projects/bookstore-new.png';
import recipe from '../assets/projects/recipe-blog.png';
import website from '../assets/projects/website-1.png';
import expense from '../assets/projects/expense-app.png';
import spa from '../assets/projects/spa-1.png';
import Modal from 'react-modal';
import Rendermodal from '../modal/Rendermodal';
import { AiFillCloseCircle, AiOutlineArrowRight } from 'react-icons/ai';

const FeaturedWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [SelectedPost, setSelectedPost] = useState(0);

  const openModal = (index: number) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPost(index);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    if (isModalOpen === false) {
      document.body.style.overflow = 'hidden';
    }
  };
  const allWork = [
    {
      id: 1,
      title: 'Spa App',
      img: spa,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus possimus quibusdam dolor aliquam doloremque eaque quod? Natus animi recusandae consectetur!',
      demo: '',
      github: 'https://github.com/newhoteng/spa-booking-backend',
      stack: ['Rails', 'React', 'Css']
    },
    {
      id: 2,
      title: 'BookStore',
      img: bookstore,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus possimus quibusdam dolor aliquam doloremque eaque quod? Natus animi recusandae consectetur!',
      demo: '',
      github: 'https://github.com/Jeddaa/bookstore',
      stack: ['React', 'Css']
    },
    {
      id: 3,
      title: 'Recipe Blog',
      img: recipe,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus possimus quibusdam dolor aliquam doloremque eaque quod? Natus animi recusandae consectetur!',
      demo: '',
      github: 'https://github.com/Jeddaa/recipe-blog',
      stack: ['Rails', 'Css']
    },
    {
      id: 4,
      title: 'Demo Website',
      img: website,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus possimus quibusdam dolor aliquam doloremque eaque quod? Natus animi recusandae consectetur!',
      demo: 'https://jeddaa.github.io/microverse-project1/#',
      github: 'https://github.com/Jeddaa/recipe-blog',
      stack: ['Html', 'JavaScript', 'Css']
    },
    {
      id: 5,
      title: 'Expense Tracker App',
      img: expense,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus possimus quibusdam dolor aliquam doloremque eaque quod? Natus animi recusandae consectetur!',
      demo: '',
      github: 'https://github.com/Jeddaa/expense-app',
      stack: ['Html', 'JavaScript', 'Css']
    },
    {
      id: 5,
      title: 'Expense Tracker App',
      img: expense,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus possimus quibusdam dolor aliquam doloremque eaque quod? Natus animi recusandae consectetur!',
      demo: '',
      github: 'https://github.com/Jeddaa/expense-app',
      stack: ['Html', 'JavaScript', 'Css']
    }
  ];

  return (
    <div
      className=" flex flex-col items-center gap-10 p-10 mx-auto my-0 text-gray-50 w-full"
      id="portfolio">
      <h1 className="text-center text-5xl text-amber-300">Recent Works</h1>
      <div className="grid lgm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 ">
        {allWork.map((work, index) => {
          return (
            <div
              key={work.id}
              className="flex flex-col gap-3 border border-slate-700 p-2 rounded-md shadow-lg justify-center items-center h-96 w-[26rem] fx:w-60 sxx:w-80 sx:w-80">
              <img
                src={work.img}
                className="h-1/2 bg-white w-5/6 fx:w-full px-4"
              />
              <h3 className="text-xl">{work.title}</h3>
              <div className="flex justify-center gap-2 text-sm text-amber-300 break-words">
                {work.stack.slice(0, 3).map((lang) => {
                  return (
                    <button
                      key={index}
                      className=" text-center border border-slate-700 shadow-lg min-w-fit rounded-md p-1.5 text-sm bg-slate-700"
                      disabled
                      type="button">
                      {lang}
                    </button>
                  );
                })}
              </div>
              <button
                className=" flex gap-2 border p-2 rounded-md w-fit cursor-pointer text-start hover:bg-slate-500"
                onClick={() => openModal(index)}>
                See More
                <AiOutlineArrowRight className="mt-1" />
              </button>
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-[c1c7d0] opacity-100 backdrop-blur-xl"
        onAfterOpen={() => (document.body.style.overflow = 'hidden')}
        onAfterClose={() => (document.body.style.overflow = 'unset')}
        className="absolute mt-24 max-w-[80vw] lgm:max-w-[65vw]  p-5 overflow-y-scroll z-50 h-[50vh] max-h-[80vh] mx-auto top-0 left-0 right-0 bottom-0 bg-gray-900 border  rounded-lg border-slate-700 shadow-lg text-gray-50">
        <div>
          <Rendermodal
            img={allWork[SelectedPost].img}
            text={allWork[SelectedPost].text}
            title={allWork[SelectedPost].title}
            demo={allWork[SelectedPost].demo}
            github={allWork[SelectedPost].github}
            stack={allWork[SelectedPost].stack}
          />
        </div>
        <div>
          <AiFillCloseCircle
            className=" absolute text-5xl top-0 p-2 right-0 text-amber-300 cursor-pointer"
            onClick={closeModal}
          />
        </div>
      </Modal>
    </div>
  );
};

export default FeaturedWork;
