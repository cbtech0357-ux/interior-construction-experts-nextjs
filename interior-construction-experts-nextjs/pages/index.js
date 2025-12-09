import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
<Head>
  <title>Interior Construction Experts — Remodeling Consultants</title>
  <meta
    name="description"
    content="Professional remodeling consulting for homeowners. Get clear pricing, timelines, and contractor reviews before starting your project."
  />
</Head>

      <Navbar />
      <main>
        <HeroSection />
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">How we help homeowners</h2>
          <p className="mb-4">We provide clear, practical consulting for remodeling projects, from scoping to contractor pricing review.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
