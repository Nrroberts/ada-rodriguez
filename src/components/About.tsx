'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
      <div className="space-y-6 text-lg text-black leading-relaxed">
          <p>
            {t('about_p1')}
          </p>
          
          <p>
            {t('about_p2')}
          </p>
          
          <p>
            {t('about_p3')}
          </p>
        </div>
    </section>
  )
}