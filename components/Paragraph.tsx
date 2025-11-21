import { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

const Paragraph = ({ children }: Props) => <p className="my-2">{children}</p>

export default Paragraph
