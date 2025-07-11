import {ComponentProps, PropsWithChildren, useEffect, useState} from 'react';

import styles from './VisuallyHidden.module.css';

interface IVisuallyHiddenProps extends ComponentProps<'span'> , PropsWithChildren {
  className?: string;
}
const VisuallyHidden = ({
  children,
  className = '',
  ...delegated
} : IVisuallyHiddenProps) => {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = () =>
        setForceShow(false);

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <span className={styles.showWrapper}>{children}</span>;
  }

  return (
    <span className={`${className} ${styles.wrapper}`} {...delegated}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
