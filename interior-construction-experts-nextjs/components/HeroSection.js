export default function HeroSection() {
  return (
    <section className="hero relative bg-cover bg-center py-20" style={{backgroundImage: "url('/images/hero-bg-construction.jpg')"}}>
      <div className="bg-black/40 p-8 rounded-lg max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Interior Construction Experts</h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-6">Striving to be the best in the business.</p>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
          Hi, I’m <strong>Charles Thomes</strong>, a North Carolina licensed General Contractor and qualified GC examiner. I spent over 11 years building new construction projects across the state — from the mountains to the coast — before focusing on remodeling.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/meta-landing" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md">Start Your Project Intake</a>
          <a href="/pricing" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-md">Book a Consultation</a>
        </div>
      </div>
    </section>
  )
}
