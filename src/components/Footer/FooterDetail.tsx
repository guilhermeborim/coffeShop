export default function FooterDetailComponent({ price }: { price?: string }) {
  return (
    <footer className="bg-white px-7 py-6 fixed bottom-0 w-full rounded-t-3xl flex items-center justify-between gap-10">
      <article>
        <h4 className="text-textDescription text-14 font-normal">Price</h4>
        <h3 className="text-18 text-orange font-semibold">$ {price}</h3>
      </article>
      <button className="bg-orange text-16 font-semibold text-white rounded-2xl flex-1 py-5">
        Buy Now
      </button>
    </footer>
  )
}
