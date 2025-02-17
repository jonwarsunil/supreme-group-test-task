import { useState } from 'react';
import Button from '../button';
import { HamburgerIcon, LanguageIcon, LinkedinIcon, Logo } from '../icon';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='bg-white shadow-md absolute top-0 z-10 w-full'>
      <nav>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <Link to='/' className='flex items-center'>
            <Logo />
          </Link>
          <div className='hidden sm:flex items-center space-x-10'>
            <Button>Contact Us</Button>
            <a href='https://www.linkedin.com/' className='text-gray-700 hover:text-gray-900' target='_blank'>
              <LinkedinIcon />
            </a>
            <button className='text-gray-700 hover:text-gray-900 flex items-center'>
              <LanguageIcon />
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className='text-gray-700 hover:text-gray-900 sm:hidden cursor-pointer'
          >
            <HamburgerIcon />
          </button>
        </div>
        {/* Mobile Drawer */}
        <div className={`fixed bg-black/50 ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>
        <div
          className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className='text-2xl absolute top-4 right-4 text-gray-700 cursor-pointer'
          >
            ✕
          </button>

          <div className='flex flex-col space-y-6 mt-16 p-6'>
            <a href='https://www.linkedin.com/' className='text-gray-700 hover:text-gray-900' target='_blank'>
              <LinkedinIcon />
            </a>
            <LanguageIcon />
            <Button
              onClick={() => {
                navigate('/#contact');
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
