'use client'
import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{maxWidth:'800px',margin:'0 auto'}}>
      {items.map((item, i) => (
        <div key={i} style={{borderBottom:'1px solid #d8d9eb',overflow:'hidden'}}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{width:'100%',textAlign:'left',background:'none',border:'none',padding:'2rem 0',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1.6rem',cursor:'pointer',fontFamily:'"Martel Sans",Georgia,serif',fontSize:'1.7rem',fontWeight:700,color:'#473f4b',lineHeight:1.3}}
          >
            <span>{item.q}</span>
            <span style={{flexShrink:0,width:'26px',height:'26px',borderRadius:'50%',border:'2px solid #d8d9eb',display:'flex',alignItems:'center',justifyContent:'center',color:'#07334d',transition:'transform .2s',transform:open===i?'rotate(45deg)':'rotate(0deg)'}}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </span>
          </button>
          {open === i && (
            <div style={{paddingBottom:'2rem',fontSize:'1.5rem',color:'#445462',lineHeight:1.7}}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
