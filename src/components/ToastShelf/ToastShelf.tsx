'use client';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {useToast} from "../ToastProvider";

function ToastShelf() {
  const context = useToast();
  if (!context) return;

  const {data: toasts, removeToast} = context;

  return (
      <ol
          className={styles.wrapper}
          role="region"
          aria-live="assertive"
          aria-label="Notification"
      >
        {toasts.map((toast) => (
            <li
                key={toast.id}
                className={styles.toastWrapper}
            >
              <Toast
                  handleDismiss={() => removeToast(toast.id)}
                  variant={toast.variant}
              >
                {toast.text}
              </Toast>
            </li>
        ))}
      </ol>
  );
}

export default ToastShelf;
