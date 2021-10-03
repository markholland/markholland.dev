import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';

const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className="my-2">{children}</p>
);

export default Paragraph;
