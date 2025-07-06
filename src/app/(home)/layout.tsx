import {PropsWithChildren} from "react";
import './styles.css';

function HomeLayout({ children } : PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default HomeLayout;
