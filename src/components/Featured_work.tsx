// import Avatar from '../assets/test.png';
import { useState } from 'react';
import bookstore from '../assets/projects/bookstore-new.png';
import recipe from '../assets/projects/recipe-blog.png';
import website from '../assets/projects/website-1.png';
import expense from '../assets/projects/expense-app.png';
import spa from '../assets/projects/spa-1.png';
import Modal from 'react-modal';
import Rendermodal from '../modal/Rendermodal';
import { AiFillCloseCircle } from 'react-icons/ai';

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
    <div className=" p-10" id="portfolio">
      <h1 className="text-center text-5xl text-amber-300">Featured Work</h1>
      <div className="grid lgm:grid-cols-3 sm:grid-cols-1 grid-cols-2 py-7 mx-auto my-0 gap-4 w-9/12">
        {allWork.map((work, index) => {
          return (
            <div key={work.id} className="flex flex-col gap-1">
              <img src={work.img} className="h-44 w-44 lgm:w-72 lgm:h-72" />
              <h3 className="text-xl">{work.title}</h3>
              <div className="flex gap-2 text-sm text-amber-300">
                {work.stack.map((lang) => {
                  return <p>{lang}</p>;
                })}
              </div>
              <button
                className="border p-2 rounded-lg w-fit cursor-pointer text-start"
                onClick={() => openModal(index)}>
                See More
              </button>
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-[c1c7d0] opacity-100 backdrop-blur-xl"
        className="absolute -mt-10 mx-auto top-[15%] left-[10%] -translate-x-4 -translate-y-4 p-10 border rounded-lg overflow-y-scroll bg-slate-800 border-slate-700 shadow-lg max-w-[95vw] h-auto max-h-[90vh] lgm:w-[70vw] text-white lgm:bottom-[10%]">
        <div>
          <Rendermodal
            img={allWork[SelectedPost].img}
            text={allWork[SelectedPost].text}
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
