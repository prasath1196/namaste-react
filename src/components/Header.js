import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=''>
      <div className='flex flex-wrap justify-between dark bg-cyan-50 shadow-lg dark:bg-black dark:text-white dark:shadow-white dark:border-b-[1px] border-b-cyan-50'>
        <div className='logo-container'>
          <img className='logo w-24' src={LOGO_URL} />
        </div>
        <div className='flex items-center p-2'>
          <ul className='flex text-lg'>
            <li className='px-2'>
              <Link to='/'>Home</Link>
            </li>
            <li className='px-2'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='px-2'>
              <Link to='/contactus'>Contact Us</Link>
            </li>
            <li className='px-2'>
              <Link to='/groceries'>Groceries</Link>
            </li>
            <li className='px-2'>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
