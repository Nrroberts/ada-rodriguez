'use client'

import { useState } from 'react'
import Image from 'next/image'

interface AccordionItem {
  id: number
  title: string
  content: string
}

const experienceItems: AccordionItem[] = [
  {
    id: 1,
    title: 'Clinical Care Manager',
    content: '6+ years providing high-volume behavioral health care for diverse populations in inpatient and home health settings, including crisis intervention, case reviews with medical directors, and Spanish-language support. Transitioned to managing psychiatric care coordination for homebound members, conducting site visits, and training providers on documentation standards and recovery-oriented practices.'
  },
  {
    id: 2,
    title: 'Licensed Professional Counselor',
    content: '6+ years providing psychotherapy to children, families, and adults, with a specialized focus on serving the Latino community. Collaborated closely with schools, healthcare providers, and child welfare agencies to ensure integrated, culturally responsive treatment planning.'
  },
  {
    id: 3,
    title: 'Senior Clinician',
    content: '10+ years case managing foster families and DCF-committed children, providing in-home psychotherapy and 24-hour crisis intervention. Collaborated on child placement and treatment planning with the Department of Children and Families, while also advocating for the educational needs of children in Wheeler’s Specialized Foster Care Program.'
  }
]

const getIconForItem = (id: number) => {
  switch (id) {
    case 1:
      return (
        <Image
          src="/hospital.svg"
          alt=""
          width={20}
          height={20}
          className="text-current"
        />
      )
    case 2:
      return (
        <Image
          src="/shield-plus.svg"
          alt=""
          width={20}
          height={20}
          className="text-current"
        />
      )
    case 3:
      return (
        <Image
          src="/scan-heart.svg"
          alt=""
          width={20}
          height={20}
          className="text-current"
        />
      )
    default:
      return null
  }
}

export default function Experience() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[40px] text-custom-gray font-medium mb-8 text-center">
          Experience
        </h2>
        
        <div className="space-y-4">
          {experienceItems.map((item) => {
            const isOpen = openItems.includes(item.id)
            
            return (
              <div key={item.id} className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-gray-200 group">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 flex items-center text-left focus:outline-none"
                >
                  <div className="text-custom-gray mr-3 group-hover:text-custom-blue transition-colors">
                    {getIconForItem(item.id)}
                  </div>
                  <span className="text-black text-base font-medium flex-1">
                    {item.title}
                  </span>
                  <span className="text-custom-gray text-xl ml-4 transition-transform duration-200 ease-in-out">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 pb-4 pl-11">
                    <p className="text-black text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}