// Import your loading image
import loadingImg from './assets/images/loading.gif'; // Adjust the path based on your folder structure

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img src={loadingImg} alt='Loading...' className='w-16 h-16' />
    </div>
  );
};

export default Loading;
