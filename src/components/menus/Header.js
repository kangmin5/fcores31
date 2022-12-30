import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../../asset/Corestone.png'
import Logged from './Logged';

const Header = () => {
    return (
        <header className='float-left w-full bg-amber-400'> 
          <div className='flex justify-between px-4 py-2 items-center  '>
            <Link to="/" className="logo">
              <img src={logo} width={140} alt="logo" className='hover:scale-105'/>
            </Link>
            <Navbar />
            <Logged/>
          </div>
        
          <hr className='border-1 border-gray-300 border-opacity-50'/>
        </header>
      );
}

export default Header