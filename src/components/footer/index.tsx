import { Link } from 'react-router-dom';
import { Logo } from '../icon';
import Typography from '../typography';
import { commFooterHead, commFooterText, footerData } from './utils';

const Footer = () => {
  return (
    <footer className='bg-white text-black'>
      <div className='container'>
        <div className='max-w-7xl mx-auto md:pl-12 py-12 md:py-[114px]'>
          <Link to='/' className='flex justify-start mb-8 md:mb-20'>
            <Logo className='sm:w-[226px] sm:h-[63px]' />
          </Link>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-20 text-sm text-left'>
            {footerData.map(section => (
              <div key={section.title}>
                <h3 className={commFooterHead}>{section.title}</h3>
                <ul className='space-y-2'>
                  {section.links.map(link => (
                    <li key={link.text} className={commFooterText}>
                      <Link to={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='flex sm:flex-row flex-col justify-between text-xs mt-8 opacity-75'>
            <Typography size='sm' className='!text-black !font-medium'>
              ©2023. All Rights Reserved.
            </Typography>
            <Typography size='sm' className='!text-black !font-medium'>
              Supreme House: 110, 16th Road, Chembur, Mumbai - 400071.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
