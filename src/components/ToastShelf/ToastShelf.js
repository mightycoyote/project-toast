import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  function dismissToast(key) {
    // I had this solution noted from an older JS course, not sure if it is still The Way to do this
    const toastIndex = toasts.findIndex(toast => toast.key === key);
    const newToastsList = [...toasts.slice(0, toastIndex), ...toasts.slice(toastIndex + 1)];
    setToasts(newToastsList);
  }
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper}>
          <Toast variant={toast.selectedVariant} message={toast.message} dismissToast={dismissToast} key={Math.random()} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
