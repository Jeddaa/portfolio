//function not in use as multiple modal is not required. can only have one modal instance so i had to create a componnet called renderModal (check this folder) and have only one modal instance in the featured work.
import { AiFillCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';

const MyModalContent = ({
  img,
  text,
  isOpen,
  closeModal,
  demo,
  stack
}: {
  img: string;
  text: string;
  isOpen: boolean;
  closeModal: () => void;
  demo: boolean;
  stack: Array<string>;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 bg-[c1c7d0] opacity-100 backdrop-blur-xl"
      className="absolute -mt-10 mx-auto top-[15%] left-[10%] -translate-x-4 -translate-y-4 p-10 border rounded-lg overflow-y-scroll bg-white max-w-[95vw] h-auto max-h-[90vh] lgm:w-[70vw] lgm:bottom-[10%]">
      <div className="  ">
        <div className="flex flex-col gap-3 w-full">
          <div className="w-full">
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
                <a href="https://github.com/Jeddaa/recipe-blog" target="_blank">
                  See Github
                </a>
              </button>
              {demo && (
                <button className="border rounded-lg p-2">See Demo</button>
              )}
            </div>
          </div>
        </div>
        <div>
          <AiFillCloseCircle
            className=" absolute text-5xl top-0 p-2 right-0 text-amber-300 cursor-pointer"
            onClick={closeModal}
          />
        </div>
      </div>
    </Modal>
  );
};

export default MyModalContent;
