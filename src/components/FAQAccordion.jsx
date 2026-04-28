import { useState } from 'react'
import Icon from './Icon'

export default function FAQAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="faq">
      {items.map((item, i) => (
        <div key={item.q} className={`faq__item${open === i ? ' is-open' : ''}`}>
          <button
            type="button"
            className="faq__trigger"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{item.q}</span>
            <span className="faq__icon"><Icon name="plus" size={16} /></span>
          </button>
          <div className="faq__body">
            <div>
              <p>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
