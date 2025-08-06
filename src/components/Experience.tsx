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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 2,
    title: 'Licensed Professional Counselor',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.'
  },
  {
    id: 3,
    title: 'Senior Clinician',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[40px] text-custom-gray font-medium mb-8 text-center">
          Experience
        </h2>
        
        <div className="space-y-4">
          {experienceItems.map((item) => {
            const isOpen = openItems.includes(item.id)
            
            return (
              <div key={item.id} className="border-b border-gray-200">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-4 flex items-center text-left focus:outline-none group"
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
                  <div className="pb-6 pl-8">
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