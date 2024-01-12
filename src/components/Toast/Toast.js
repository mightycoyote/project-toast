import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({message, variant, setVisibility}) {
  const Icon = ICONS_BY_VARIANT[variant];
  const classes = `${styles.toast} ${styles[variant]}`;

  return (
    <div className={classes}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button onClick={() => {setVisibility(false)}} className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
  // return (
  //   <div className={`${styles.toast} ${styles.notice}}`}>
  //     <div className={styles.iconContainer}>
  //       <Info size={24} />
  //     </div>
  //     <p className={styles.content}>
  //       {message}
  //     </p>
  //     <button className={styles.closeButton}>
  //       <X size={24} />
  //       <VisuallyHidden>Dismiss message</VisuallyHidden>
  //     </button>
  //   </div>
  // );
}

export default Toast;
