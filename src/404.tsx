import { Link } from 'react-router-dom';
import Typography from './components/typography';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      <Typography className='!text-black pb-2' size='h1'>
        404
      </Typography>
      <Typography size='md' className='!text-black pb-3'>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Link to='/' className='mt-6 px-6 py-2 bg-[#46d0ff] text-black rounded-full'>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
