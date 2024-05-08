export const Size = () => {
  return (
    <section className="flex items-center justify-between gap-3">
      <button
        className="rounded-xl border border-borderSize bg-white mobile:w-[96px] mobile:h-[43px] h-[60px] flex-1 items-center justify-center  flex font-normal text-14 text-textName
      hover:text-orange hover:bg-backgroundSize hover:border-orange"
      >
        S
      </button>
      <button
        className="rounded-xl border border-borderSize bg-white mobile:w-[96px] mobile:h-[43px] h-[60px] flex-1 items-center justify-center flex font-normal text-14 text-textName
      hover:text-orange hover:bg-backgroundSize hover:border-orange"
      >
        M
      </button>
      <button
        className="rounded-xl border border-borderSize bg-white mobile:w-[96px] mobile:h-[43px] h-[60px] flex-1 items-center justify-center flex font-normal text-14 text-textName
      hover:text-orange hover:bg-backgroundSize hover:border-orange"
      >
        L
      </button>
    </section>
  )
}
