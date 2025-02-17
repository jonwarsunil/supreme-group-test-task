import { TypographyManropeCondensedSize, TypographyManropeSize } from './interface';

export const getFontSize = (size: TypographyManropeCondensedSize | TypographyManropeSize) => {
  switch (size) {
    case 'h1':
      return 'text-5xl leading-[58px] tracking-[-0.5px] font-normal text-white';
    /**
     * font-size: 48px
     * line-height: 58px
     * letter-spacing: -0.5px
     * font-weight: semibold 600
     */
    case 'h2':
      return 'text-5xl leading-[38px] font-semibold text-white';
    /**
     * font-size: 48px
     * line-height: 38px
     * letter-spacing: 0px
     * font-weight: semibold 600
     */
    case 'h3':
      return 'text-[28px] font-bold text-h4 leading-[38.25px] tracking-[-0.5px] text-white';
    /**
     * font-size: 28px
     * line-height: 38px
     * letter-spacing: -0.5px
     * font-weight: bold 700
     */
    case 'h4':
      return 'text-[22px] leading-[30.05px] font-normal text-white';
    /**
     * font-size: 22px
     * line-height: 30px
     * letter-spacing: 0px
     * font-weight: 400
     */
    case 'body':
      return 'text-2xl leading-2xl font-normal text-white';
    /**
     * font-size: 24px
     * line-height: 30px
     * letter-spacing: 0px
     * font-weight: 400
     */
    case 'lg':
      return 'text-md leading-[16px] font-normal text-white';
    /**
     * font-size: 20px
     * line-height: 16px
     * letter-spacing: 0px
     * font-weight: 400
     */
    case 'md':
      return 'text-lg leading-[24.59px] tracking-[-0.09px] font-normal text-white';
    /**
     * font-size: 18px
     * line-height: 24.59px
     * letter-spacing: -0.09px;
     * font-weight: 400
     */
    case 'base':
      return 'text-base leading-[21.86px] tracking-[0.16px] font-bold text-white';
    /**
     * font-size: 16px
     * line-height: 21.86px
     * letter-spacing: 0.16px
     * font-weight: 700
     */
    case 'sm':
      return 'text-sm leading-[41px] tracking-[0.45px] font-medium text-white';
    /**
     * font-size: 14px
     * line-height: 41px
     * letter-spacing: 0.45px
     * font-weight: 500
     */
  }
};
