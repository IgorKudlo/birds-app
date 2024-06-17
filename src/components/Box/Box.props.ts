import { ComponentPropsWithoutRef } from 'react';

export interface BoxProps extends ComponentPropsWithoutRef<'div'> {
  withoutPadding?: boolean;
}