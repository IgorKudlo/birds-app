import styles from './Box.module.css';
import { BoxProps } from './Box.props';

export const Box = (props: BoxProps) => {
  const { withoutPadding, children, ...rest } = props;

  return (
    <div className={`${styles.box} ${withoutPadding ? styles.withoutPadding: ''}`} {...rest}>
      {children}
    </div>
  );
};