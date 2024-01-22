import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper}>
          <Toast id={toast.id} key={toast.id} message={toast.message} variant={toast.selectedVariant} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
