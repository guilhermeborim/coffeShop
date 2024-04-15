'use client'

import { Search } from 'lucide-react'

export default function InputHeaderComponent() {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-3xl px-4 py-2 bg-bgInput text-input font-normal text-14 outline-none"
      />
      <button className="bg-transparent absolute right-4 outline-none">
        <Search color="white" />
      </button>
    </>
  )
}
