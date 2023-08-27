'use client'

export async function generateStaticParams({ params: { category }}) {
  return ['1', '2', '3'].map((product) => ({ category, product }))
}

export default function Page({ params: { category, product } }: {
  params: {
    category: string;
    product: string;
  };
}) {
  return (
    <>
      <main>
        Category: {category}
        <br />
        Product: {product}
      </main>
    </>
  )
}