import './global.css'

export async function generateStaticParams() {
  return ['cars', 'boats', 'planes'].map((category) => ({ category }))
}

export default function RootLayout({
  children,
  params: {
    category
  }
}) {
  console.log({category});
  return (
    <html>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
