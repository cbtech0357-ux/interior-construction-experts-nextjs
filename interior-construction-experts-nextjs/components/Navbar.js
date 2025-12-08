import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-bold">Interior Construction Experts</div>
        <div className="space-x-4">
          <Link href="/"><a className="hover:text-orange-400">Home</a></Link>
          <Link href="/services"><a className="hover:text-orange-400">Services</a></Link>
          <Link href="/pricing"><a className="hover:text-orange-400">Pricing</a></Link>
          <Link href="/meta-landing"><a className="hover:text-orange-400">Get Help</a></Link>
        </div>
      </div>
    </nav>
  )
}
