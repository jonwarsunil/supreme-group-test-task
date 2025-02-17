import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children,
  className = '',
  type,
}) => {
  const baseStyle = 'rounded-full font-medium text-base transition-all duration-200 px-[30px] py-[14px] cursor-pointer';
  const variantStyles = {
    primary: 'bg-[#5CD6FF] text-black hover:bg-[#46d0ff]',
    secondary: 'bg-white text-black',
  };
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
