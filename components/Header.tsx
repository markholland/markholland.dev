import { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

const Header = ({ children }: Props) => (
  <p className="my-4 font-bold">{children}</p>
)

export default Header
