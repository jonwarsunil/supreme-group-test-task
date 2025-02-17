import { TypographyProps } from './interface';
import { getFontSize } from './utils';

const Typography: React.FC<TypographyProps> = ({ size, className = '', children }) => {
  const classNames = [size && getFontSize(size), className].join(' ');
  return <div className={classNames}>{children}</div>;
};
export default Typography;
