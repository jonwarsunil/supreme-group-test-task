import { useState } from 'react';
import { SliderProps } from './interface';

const Slider: React.FC<SliderProps> = ({ slides, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset active index if the slides change
  const safeActiveIndex = activeIndex >= slides.length ? 0 : activeIndex;

  return (
    <div className={`${className} flex flex-col items-center justify-center w-full`}>
      {/* Image Slider */}
      <div className='relative w-auto xl:w-[600px] h-[230px] xl:h-[400px] overflow-hidden rounded-lg shadow-lg'>
        <figure className='w-auto sm:w-[400px] xl:w-[600px] h-auto'>
          <img
            key={slides[safeActiveIndex]?.id}
            src={slides[safeActiveIndex]?.image || '/placeholder.jpg'}
            alt={slides[safeActiveIndex]?.text || 'Image'}
            className='w-full h-full object-cover'
          />
        </figure>
      </div>
      {/* Desktop text buttons */}
      <div className='mt-4 hidden md:flex space-x-4'>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`px-4 py-2 text-base leading-[43px] tracking-[0.16px] font-medium transition-all cursor-pointer ${
              safeActiveIndex === index ? 'text-white' : 'text-gray-500'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {slide.text}
          </button>
        ))}
      </div>
      {/* Mobile slider dots */}
      <div className='mt-4 flex md:hidden space-x-2'>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-2.5 h-2.5 transition-all cursor-pointer transform ${
              safeActiveIndex === index
                ? 'bg-blue-500 border-blue-500 scale-125 shadow-lg w-6 rounded-md'
                : 'bg-[#606060] border-gray-300 hover:bg-gray-400 rounded-full'
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
