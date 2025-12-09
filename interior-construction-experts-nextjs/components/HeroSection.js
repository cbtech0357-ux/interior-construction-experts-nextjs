export default function HeroSection() {
  return (
    <section
      className="hero relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/images/hero-bg-construction.jpg')" }}
    >
      <div className="bg-black/40 p-8 rounded-lg max-w-4xl mx-auto text-center">
        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          Interior Construction Experts
        </h1>

        {/* Smaller, softer subtitle (Option A) */}
        <p className="text-lg sm:text-xl text-gray-300 mb-6 tracking-wide">
          Residential Remodeling Consulting Services
        </p>

        {/* Intro paragraph – clearly consulting (no hands-on construction) */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
          Hi, I&apos;m <strong>Charles Thomes</strong>, a North Carolina licensed
          General Contractor and qualified GC examiner. I help homeowners
          understand the <em>true scope, cost, and risk</em> of their remodeling
          projects—before they sign a contract or spend a dollar on construction.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/meta-landing"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition"
          >
            Start Your Project Intake
          </a>
          <a
            href="/pricing"
            className="bg-gray-900/80 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-md transition"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

