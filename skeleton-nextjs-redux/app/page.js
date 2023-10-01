import Image from 'next/image'

import { Number } from './components/Number/Number'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Number />
    </main>
  )
}
