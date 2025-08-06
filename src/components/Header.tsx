'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-6">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Headshot */}
        <div className="flex-shrink-0">
          <Image
            src="/profile-1.jpg"
            alt="Ada Rodriguez"
            width={320}
            height={384}
            className="w-64 h-80 md:w-80 md:h-96 rounded-[20px] object-cover"
          />
        </div>

        {/* Title and Subtitle */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-[52px] font-medium text-black mb-4">
            {t('title')}
          </h1>
          <h2 className="text-2xl md:text-[24px] text-black">
            {t('subtitle')}
          </h2>
        </div>
      </div>
    </section>
  )
}