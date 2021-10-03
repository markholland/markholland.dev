import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';

const Header = ({ children }: { children: ReactNode }) => (
  <p className="my-4 font-bold">{children}</p>
);

export default Header;
