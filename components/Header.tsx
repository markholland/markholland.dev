import { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

const Header = ({ children }: Props) => (
  <h3 className="my-4 font-bold">{children}</h3>
)

export default Header
