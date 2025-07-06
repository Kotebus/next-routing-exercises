import {PropsWithChildren} from 'react';

import './styles.css';

function ScreenSaverLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default ScreenSaverLayout;
