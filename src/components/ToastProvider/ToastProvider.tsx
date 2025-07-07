'use client';
import {PropsWithChildren, use, useCallback, useMemo, useState} from 'react';

import useKeydown from '../../hooks/use-keydown';
import {INewToastData, IToastData, ToastContext} from "./ToastContext";

function ToastProvider({children} : PropsWithChildren) {
  const [data, setData] = useState<IToastData[]>([]);

  const clearData = useCallback(() => setData([]), []);
  useKeydown('Escape', clearData);

  const addToast = useCallback(
      ({text, variant} : INewToastData) => {
        const newToastDataItem: IToastData = {
          text: text,
          variant: variant,
          id: crypto.randomUUID()
        };
        setData([...data, newToastDataItem]);
      }, [data]);

  const removeToast = useCallback(
      (toastId: string) => {
        const newData = data.filter((item) => item.id !== toastId);
        setData(newData);
      },
      [data]);

  const value = useMemo(
      () => {
        return {data, addToast, removeToast};
      },
      [addToast, data, removeToast]);

  return (
      <ToastContext value={value}>
        {children}
      </ToastContext>
  );
}

export const useToast = () => use(ToastContext);
export default ToastProvider;
