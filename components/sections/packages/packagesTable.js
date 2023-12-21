'use client'

import React, { useState, useEffect } from "react";
import styles from "./packagesTable.module.scss"
import Vector from "@/components/atoms/vector"
import CtaLight from "@/components/atoms/cta/ctaLight"
import ServiceTags from "@/components/molecules/tags/services/tags";

const packages = [
  {
    id: "package_one",
    recommended: false,
    heading: "Foundation",
    desc: "Mapping out effective brand positioning, helping your people find you.",
    price: 999,
    values: true,
    voiceAndMessaging: true,
    colourPalette: true,
    logo: false,
    typography: false,
    imageryAndIconography: false,
    webDesign: false,
    webDevelopment: false,
    extraCharges: "",
    minimumDuration: 1,
  },
  {
    id: "package_two",
    recommended: true,
    heading: "Evolve",
    desc: "Aligning brand purpose and principles with a compelling identity, helping your people recognise you.",
    price: 2499,
    values: true,
    voiceAndMessaging: true,
    colourPalette: true,
    logo: true,
    typography: true,
    imageryAndIconography: true,
    webDesign: false,
    webDevelopment: false,
    extraCharges: "",
    minimumDuration: 5,
  },
  {
    id: "package_three",
    recommended: false,
    heading: "Technical",
    desc: "Curate your digital home, helping your people to knock on your door.",
    price: 1999,
    values: false,
    voiceAndMessaging: false,
    colourPalette: false,
    logo: false,
    typography: false,
    imageryAndIconography: false,
    webDesign: true,
    webDevelopment: true,
    extraCharges: "Website exceeding 10 pages",
    minimumDuration: 4,
  },
  {
    id: "package_four",
    recommended: false,
    heading: "Complete",
    desc: "Bringing all previous packages into one, helping your people remember and return to you.",
    price: 3999,
    values: true,
    voiceAndMessaging: true,
    colourPalette: true,
    logo: true,
    typography: true,
    imageryAndIconography: true,
    webDesign: true,
    webDevelopment: true,
    extraCharges: "Website exceeding 10 pages",
    minimumDuration: 9,
  },
]

const formatServiceType = (service) => {
  const words = service.match(/[A-Za-z][a-z]*/g) || []
  const firstWord = words[0] || ""
  const restOfWords = words.slice(1).map(word => word.toLowerCase())
  return [firstWord.charAt(0).toUpperCase() + firstWord.slice(1), ...restOfWords].join(" ")
}

export default function PackagesTable() {
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth)
    }

    updateViewportWidth()

    window.addEventListener("resize", updateViewportWidth)

    return () => {
      window.removeEventListener("resize", updateViewportWidth)
    }
  })

  const extractServices = (packageObj) => {
    return Object.keys(packageObj)
    .filter((key) => key !== 'recommended' && typeof packageObj[key] === 'boolean' && packageObj[key])
    .map(formatServiceType)
  }

  const services = [
    "minimumDuration",
    "values",
    "voiceAndMessaging",
    "colourPalette",
    "logo",
    "typography",
    "imageryAndIconography",
    "webDesign",
    "webDevelopment",
    "extraCharges",
  ]

  return (
    <section className={`space ${styles.wrapper}`}>
      {viewportWidth < 768 ? (
        <>
          {packages.map(plan => (
            <article
              key={plan.id}
              className={styles.mobileCard}
            >
              <h2>{plan.heading}</h2>
              <p>{plan.desc}</p>
              <ServiceTags services={extractServices(plan)} />
              <div className={styles.priceTag}>
                <span className={styles.currency}>£</span>
                {plan.price}
              </div>
              <CtaLight href="/contact">Enquire</CtaLight>
            </article>
          ))}
        </>
      ) : viewportWidth < 992 ? (
        <table className={styles.tabletPackages}>
          <caption className="screenReaderVisible">
            A table
          </caption>
          <tbody>
            <tr>
              <th colSpan={4}>
                <h2>Not sure which package is right for you?</h2>
                <p>We respect your time, and we know it&apos;s valuable. While our rates are competitive, we get that it might not suit every budget. Being transparent helps us save time for everyone.</p>
              </th>
            </tr>
            <tr>
              {packages.map(cell => (
                <td key={cell.id}>
                  <h2>{cell.heading}</h2>
                  <p>{cell.desc}</p>
                  <div className={styles.priceTag}>
                    <span className={styles.currency}>£</span>
                    {cell.price}
                  </div>
                  <CtaLight href="/contact">Enquire</CtaLight>
                </td>
              ))}
            </tr>
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <tr>
                  <th colSpan={4}>{formatServiceType(service)}</th>
                </tr>
                <tr>
                  {packages.map(cell => (
                    <td key={cell.id}>
                      {cell.hasOwnProperty("extraCharges") && service === "extraCharges" ? (
                        cell.extraCharges !== "" ? (
                          cell.extraCharges
                        ) : (
                          <Vector name="minus" />
                        )
                      ) : cell.hasOwnProperty("minimumDuration") && service === "minimumDuration" ? (
                        cell.minimumDuration !== "" ? (
                          `${cell.minimumDuration} ${cell.minimumDuration === 1 ? "week" : "weeks"}`
                        ) : (
                          <Vector name="uncheck" />
                        )
                      ) : cell[service] ? (
                        <Vector name="check" />
                      ) : (
                        <Vector name="uncheck" />
                      )}
                    </td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <table className={styles.packages}>
          <caption className="screenReaderVisible">
            A table
          </caption>
          <tbody>
            <tr>
              <th>
                <h2>Not sure which package is right for you?</h2>
                <p>We respect your time, and we know it&apos;s valuable. While our rates are competitive, we get that it might not suit every budget. Being transparent helps us save time for everyone.</p>
              </th>
              {packages.map(cell => (
                <td key={cell.id}>
                  <h2>{cell.heading}</h2>
                  <p>{cell.desc}</p>
                  <div className={styles.priceTag}>
                    <span className={styles.currency}>£</span>
                    {cell.price}
                  </div>
                  <CtaLight href="/contact">Enquire</CtaLight>
                </td>
              ))}
            </tr>
            {services.map((service, index) => (
              <tr key={index}>
                <th>{formatServiceType(service)}</th>
                {packages.map(cell => (
                  <td key={cell.id}>
                    {cell.hasOwnProperty("extraCharges") && service === "extraCharges" ? (
                      cell.extraCharges !== "" ? (
                        cell.extraCharges
                      ) : (
                        <Vector name="minus" />
                      )
                    ) : cell.hasOwnProperty("minimumDuration") && service === "minimumDuration" ? (
                      cell.minimumDuration !== "" ? (
                        `${cell.minimumDuration} ${cell.minimumDuration === 1 ? "week" : "weeks"}`
                      ) : (
                        <Vector name="uncheck" />
                      )
                    ) : cell[service] ? (
                      <Vector name="check" />
                    ) : (
                      <Vector name="uncheck" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
