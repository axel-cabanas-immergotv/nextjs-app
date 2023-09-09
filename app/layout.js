export const metadata = {
  title: 'My app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
