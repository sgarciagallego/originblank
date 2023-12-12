'use client'

import { useState, useEffect } from "react"
import styles from "./accordion.module.scss"

/*
  ? Usage

  const faqs =[
    {
      header: "string",
      description: "string",
      active: boolean,
    }
  ]

  {faqs.map((faq, index) => (
    <Accordion 
      key={index} 
      header={faq.header} 
      description={faq.description} 
      active={faq.active}
    />
  ))}
*/

export default function Accordion({ 
  id, 
  header, 
  description,
  listName,
  list,
  active=false
}) {
  const [accordionOpen, setAccordionOpen] = useState(false)

  useEffect(() => {
    setAccordionOpen(active)
  }, [active])

  const hasDescription = !!description
  const hasList = listName && list && list.length > 0

  return (
    <div className={styles.wrapper}>
      <button
        onClick={(e) => {
          e.preventDefault()
          setAccordionOpen(!accordionOpen)
        }}
        aria-expanded={accordionOpen}
        aria-controls={`accordion-text-${id}`}
      >
        <h3>{header}</h3>
        <div
          className={accordionOpen ? styles.open : ""}
        >
          <span></span>
          <span></span>
        </div>
      </button>
      <div
        id={`accordion-text-${id}`}
        role="region"
        className={accordionOpen ? styles.open : styles.close}
      >
        <div className={styles.flex}>
          {hasDescription && <div><p>{description}</p></div>}
          {hasList && (
            <div>
              <h4>{listName}</h4>
              <ul role="list">
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
    </div>
  </div>
  )
}