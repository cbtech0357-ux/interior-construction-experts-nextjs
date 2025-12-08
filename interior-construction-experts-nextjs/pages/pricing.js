import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing — Interior Construction Experts</title>
      </Head>
      <Navbar />
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Pricing</h1>
          <p className="mb-4">Our consulting rates are simple and transparent.</p>
          <ul className="text-lg">
            <li><strong>$130</strong> — first hour</li>
            <li><strong>$90</strong> — per hour after the first</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">Soft disclaimer: Rates depend on consultation depth and project specifics.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
