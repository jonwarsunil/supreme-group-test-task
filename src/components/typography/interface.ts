import type { PropsWithChildren } from 'react';

export type TypographyManropeCondensedSize = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'base';

export type TypographyManropeSize = 'sm' | 'md' | 'lg';

export interface TypographyProps extends PropsWithChildren {
  size?: TypographyManropeCondensedSize | TypographyManropeSize;
  className?: string;
}
