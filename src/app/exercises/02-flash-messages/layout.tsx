import {PropsWithChildren} from 'react';
import './styles.css';
import ToastShelf from "../../../components/ToastShelf";
import ToastProvider from "../../../components/ToastProvider";

function FlashMsgLayout({ children } : PropsWithChildren) {
    return (
        <html lang="en">
        <body>
        <ToastProvider>
            <ToastShelf/>
            {children}
        </ToastProvider>
        </body>
        </html>
    );
}

export default FlashMsgLayout;
