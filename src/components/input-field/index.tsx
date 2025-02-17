import React from 'react';

interface InputFieldProps {
  type?: string;
  name: string;
  placeholder: string;
  isTextarea?: boolean;
  className?: string;
  register: any;
  errors?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  name,
  placeholder,
  isTextarea = false,
  className,
  register,
  errors,
}) => {
  return (
    <div className='relative w-full'>
      {isTextarea ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={4}
          className={`${className} w-full h-23 border-b border-white placeholder-white placeholder:font-semibold placeholder:text-md text-white focus:outline-none focus:border-white transition-all pb-3 resize-none`}
        />
      ) : (
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={`${className} w-full border-b border-white placeholder-white placeholder:font-semibold placeholder:text-md text-white focus:outline-none focus:border-white transition-all pb-3`}
        />
      )}
      {errors && errors[name] && (
        <p className='text-red-500 text-sm mt-1 absolute bottom-[-20px]'>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default InputField;
