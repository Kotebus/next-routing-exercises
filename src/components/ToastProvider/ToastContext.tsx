import {createContext} from "react";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'] as const;
export type VariantOptionType = typeof VARIANT_OPTIONS[number];

export interface IToastData {
    text: string;
    variant: VariantOptionType;
    id: string;
}

export interface INewToastData {
    text: string;
    variant: VariantOptionType;
}

interface IToastProvider {
    data: IToastData[];
    addToast: ({text, variant} : INewToastData) => void;
    removeToast: (toastId: string) => void;
}
export const ToastContext = createContext<IToastProvider | null>(null);