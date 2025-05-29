import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Sweta Mishra - Portfolio',
  description: 'The story of Neelu, the dreamer from Devnathpur 🌿',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
