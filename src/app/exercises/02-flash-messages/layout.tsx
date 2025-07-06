import {PropsWithChildren} from 'react';
import './styles.css';

function FlashMsgLayout({ children } : PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default FlashMsgLayout;
