import Image from 'next/image'

export default function Header() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Headshot */}
        <div className="flex-shrink-0">
          <div className="w-64 h-80 md:w-80 md:h-96 bg-gray-200 rounded-[20px] flex items-center justify-center">
            <span className="text-gray-500 text-lg">Headshot</span>
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-[52px] font-medium text-black mb-4">
            Ada Rodrigues
          </h1>
          <h2 className="text-2xl md:text-[24px] text-black">
            Bilingual licensed professional counselor with 20+ years experience
          </h2>
        </div>
      </div>
    </section>
  )
}