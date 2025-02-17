import bannerVideo from '../../assets/video/4468754-hd_1920_1080_24fps.mp4';
import fallBackBanner from '../../assets/images/banner-fallback-bg.jpg';
import Typography from '../typography';
import InputField from '../input-field';
import Button from '../button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CommercialVehicleSlides, contactFormSchema, PassangerVehicleSlides, tabsData } from './utils';
import VerticalTabs from '../Tab';
import { useState } from 'react';
import Slider from '../slider/Index';
import { FormData } from './interface';

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data);
  };

  return (
    <div>
      {/* Top section */}
      <section className='relative w-full h-screen overflow-hidden'>
        <video className='absolute top-0 left-0 w-full h-full object-cover hidden sm:block' autoPlay loop muted>
          <source src={bannerVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {/* Static Image for mobile fallback */}
        <img
          src={fallBackBanner}
          alt='Background'
          className='absolute top-0 left-0 w-full h-full object-cover sm:hidden'
        />
        {/* Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center'>
          <div className='container'>
            <Typography size='h4' className='text-center'>
              Performance in motion
            </Typography>
            <Typography size='h1' className='!font-bold mx-auto sm:w-2xl text-center'>
              Soft Trims and NVH Solutions <span className='font-normal'>for seamless rides</span>
            </Typography>
          </div>
        </div>
      </section>
      {/* Center section */}
      <section className='relative bg-black h-auto lg:h-screen py-[72px]'>
        <div className='container'>
          <Typography size='h1' className=' text-center w-auto lg:w-240 mx-auto font-normal'>
            Evolving the drive with <span className='font-bold'>360-degree</span> nonwoven solutions
          </Typography>
          <div className='flex justify-center lg:justify-between pt-20 md:pt-[135px]'>
            <div className='lg:block hidden'>
              <VerticalTabs tabs={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className='text-white lg:block hidden'>
              {activeTab === '1' ? (
                <Slider slides={PassangerVehicleSlides} />
              ) : (
                <Slider slides={CommercialVehicleSlides} />
              )}
            </div>
            {/* Slider For Mobiile */}
            <div className='text-white lg:hidden block'>
              <div className='text-center'>
                <Typography size='h3'>Passanger Vehicle</Typography>
                <Typography size='md' className='pb-6'>
                  Revving up Nonwoven innovation from interior to exterior.
                </Typography>
                <Slider slides={PassangerVehicleSlides} />
              </div>
              <div className='text-center mt-12'>
                <Typography size='h3'>Commercial vehicles</Typography>
                <Typography size='md' className='pb-6'>
                  Advancing engineering for heavy-duty vehicles.
                </Typography>
                <Slider slides={CommercialVehicleSlides} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get in touch section */}
      <section className='bg-[#0067B1] w-full'>
        <div className='container'>
          <div className='flex items-center md:flex-row flex-col py-[72px] lg:py-[205px] lg:px-20 2xl:px-42'>
            <div className='basis-1/2'>
              <Typography size='h2' className=' relative'>
                Get <span className='absolute bottom-0 left-0 bottom-[-40px] w-12 h-[3px] bg-white'></span> in touch
              </Typography>
              <Typography size='body' className='pt-20 pb-10'>
                For general enquiries
              </Typography>
              <div className='pb-[30px]'>
                <Typography size='lg' className='!font-bold pb-[15px]'>
                  Address :
                </Typography>
                <Typography size='lg'>110, 16th Road, Chembur, Mumbai – 400071</Typography>
              </div>
              <div className='pb-[30px]'>
                <Typography className='!font-bold pb-[15px]' size='lg'>
                  Phone :
                </Typography>
                <Typography size='lg'>+91 22 25208822</Typography>
              </div>
              <div>
                <Typography className='!font-bold pb-[15px]' size='lg'>
                  Email :
                </Typography>
                <Typography size='lg'>info@supremegroup.co.in</Typography>
              </div>
            </div>
            <div className='basis-1/2 mt-12 md:mt-0'>
              <form onSubmit={handleSubmit(onSubmit)} className='w-[300px] md:w-full mx-auto space-y-6'>
                <InputField name='fullName' placeholder='Full Name' register={register} errors={errors} />
                <InputField
                  className='pt-6'
                  type='email'
                  name='email'
                  placeholder='Email'
                  register={register}
                  errors={errors}
                />
                <InputField className='pt-6' name='subject' placeholder='Subject' register={register} errors={errors} />
                <InputField
                  className='pt-6'
                  name='message'
                  placeholder='Message'
                  isTextarea
                  register={register}
                  errors={errors}
                />
                <Button type='submit' variant='secondary' className='mt-4 w-[141px]'>
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
