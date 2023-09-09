import { AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <fieldset className="border-t-2 border-b-2 border-amber-300 flex flex-col items-center gap-4 my-5 py-8 w-full">
      <legend className="text-center text-3xl text-amber-300 bg-slate-800 px-2">
        Contact
      </legend>
      <div className="flex gap-5">
        <div className="flex gap-3 bg-slate-900 py-1 px-3 shadow-md rounded-md">
          <span className="flex pb-0.5 items-end">
            <AiOutlineMail />
          </span>
          <p>fathiato@gmail.com</p>
        </div>
        <div className="flex gap-2 py-1 px-3 bg-slate-900 shadow-md rounded-md">
          <span className="flex pb-0.5 items-end">
            <FiPhone />
          </span>
          <p>23408144141478</p>
        </div>
      </div>
      <div>
        <div className="flex gap-3 py-1 px-3 bg-slate-900 shadow-md rounded-md">
          <span className="flex pb-0.5 items-end">
            <MdLocationOn />
          </span>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </fieldset>
  );
};

export default Contact;
