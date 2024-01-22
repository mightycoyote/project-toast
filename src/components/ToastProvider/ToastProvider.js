import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    // { message: "Testy", selectedVariant: "notice", id: 1 },
  ]);
  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState("notice");

  function addToast(message, selectedVariant) {
    const id = Math.random();
    const newToast = { message, selectedVariant, id };
    const newToastsList = [...toasts, newToast];
    setToasts(newToastsList);
  }
  function dismissToast(id) {
    // I had this solution noted from an older JS course, not sure if it is still The Way to do this
    const toastIndex = toasts.findIndex(toast => toast.id === id);
    const newToastsList = [...toasts.slice(0, toastIndex), ...toasts.slice(toastIndex + 1)];
    setToasts(newToastsList);
  }

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        selectedVariant,
        setSelectedVariant,
        toasts,
        setToasts,
        addToast,
        dismissToast
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
