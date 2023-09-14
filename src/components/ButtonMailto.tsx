import { Link } from 'react-router-dom';

const ButtonMailto = () => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = 'mailto:fathiat0@gmail.com';
        e.preventDefault();
      }}>
      contact
    </Link>
  );
};

export default ButtonMailto;
