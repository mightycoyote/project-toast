import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import { ToastContext } from "../ToastProvider";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast( {id, message, variant}) {
  const { dismissToast } =
    React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];
  const classes = `${styles.toast} ${styles[variant]}`;

  return (
    <div className={classes}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button
        onClick={() => {
          dismissToast(id);
        }}
        className={styles.closeButton}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
