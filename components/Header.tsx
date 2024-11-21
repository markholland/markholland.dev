import { ReactNode } from 'react'
import 'tailwindcss/tailwind.css'

type Props = {
  readonly children: ReactNode
}

const Header = ({ children }: Props) => (
  <p className="my-4 font-bold">{children}</p>
)

export default Header
