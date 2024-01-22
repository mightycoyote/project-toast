import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { addToast, message, setMessage, selectedVariant, setSelectedVariant } = React.useContext(ToastContext);

  return (
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf />

        <form
          onSubmit={(event) => {
            event.preventDefault();
            addToast(message, selectedVariant);
          }}
          className={styles.controlsWrapper}
        >
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => (
                <label htmlFor={variant} key={variant}>
                  <input
                    id={variant}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={variant === selectedVariant}
                    onChange={(event) => {
                      setSelectedVariant(event.target.value);
                    }}
                  />
                  {variant}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default ToastPlayground;
