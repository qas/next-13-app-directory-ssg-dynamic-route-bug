import Link from 'next/link'

export default async function Page({ params: { category } }: {
  params: {
    category: string;
  };
}) {
  return (
    <>
      <main>
        <Link href="/cars/1">Go to cars</Link>
        <Link href="/boats/1">Go to boats</Link>
        <Link href="/planes/1">Go to planes</Link>
      </main>
    </>
  )
}
