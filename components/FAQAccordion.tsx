'use client'
import { useState } from 'react'

interface FAQItem {
  q: string
  a: string | React.ReactNode
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i} className="py-1">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center py-4 text-left font-bold text-[1.55rem] text-[#07334d] hover:text-[#006b63] transition-colors"
          >
            <span>{item.q}</span>
            <svg
              width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              className={`flex-shrink-0 ml-4 transition-transform ${open === i ? 'rotate-45' : ''}`}
            >
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
          {open === i && (
            <div className="pb-5 text-[1.5rem] text-gray-600 leading-relaxed pr-8">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
