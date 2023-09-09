import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="flex text-white justify-center gap-2 pt-5">
      <div className="object-cover pb-1 flex items-end">
        <AiOutlineCopyrightCircle />
      </div>
      <p>Fatihah Oduwole</p>
      <p>2023</p>
    </div>
  );
};

export default Footer;
