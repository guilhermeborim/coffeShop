'use client'

import { Search } from 'lucide-react'

export default function InputHeaderComponent() {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-3xl py-1 pl-2 bg-neutral-600 text-white outline-none"
      />
      <button className="bg-transparent absolute top-1 right-2 outline-none">
        <Search />
      </button>
    </>
  )
}
