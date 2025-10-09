import Link from 'next/link'

export default function Header(){ 
  return (
    <header className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Supreme Group" className="h-10"/>
        </div>
        <nav className="flex items-center gap-6 text-gray-700">
          <Link href="#applications">Applications</Link>
          <Link href="#company">Company</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
