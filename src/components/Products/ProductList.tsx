import ProductComponent from './Product'

export default function ProductListComponent() {
  return (
    <article className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4">
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
    </article>
  )
}
