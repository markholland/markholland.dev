import { ReactNode } from 'react'
import 'tailwindcss/tailwind.css'

type Props = {
  readonly children: ReactNode
}

const Paragraph = ({ children }: Props) => <p className="my-2">{children}</p>

export default Paragraph
