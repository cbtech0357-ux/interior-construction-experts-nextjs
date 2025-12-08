import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IntakeForm from '../components/IntakeForm'

export default function MetaLanding() {
  return (
    <>
      <Head>
        <title>Get Expert Remodeling Guidance</title>
      </Head>
      <Navbar />
      <main>
        <section className="relative bg-cover bg-center py-16" style={{backgroundImage: "url('/images/hero-bg-construction.jpg')"}}>
          <div className="bg-black/40 p-8 rounded-lg max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Expert Remodeling Guidance</h1>
            <p className="text-lg text-gray-200 mb-6">Fill out the form and get a fast callback from our assistant.</p>
          </div>
        </section>
        <section className="py-12 px-6">
          <IntakeForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
