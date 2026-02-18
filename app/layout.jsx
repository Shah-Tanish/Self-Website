import './globals.css'

export const metadata = {
  title: 'Tanish Shah - Software Developer',
  description: 'Portfolio of Tanish Shah, Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}