import Vector from "@/components/atoms/vector"
import styles from "./packagesTable.module.scss"
import CtaLight from "@/components/atoms/cta/ctaLight"

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
  },
]

const formatServiceType = (service) => {
  const words = service.match(/[A-Za-z][a-z]*/g) || []
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export default function PackagesTable() {
  const services = [
    'values',
    'voiceAndMessaging',
    'colourPalette',
    'logo',
    'typography',
    'imageryAndIconography',
    'webDesign',
    'webDevelopment',
  ];

  return (
    <section className={`space ${styles.wrapper}`}>
      <table className={styles.packages}>
        <caption className="screenReaderVisible">
          A table
        </caption>
        <tbody>
          <tr>
            <th>
              <h2>Not sure which package is right for you?</h2>
              <p>We respect your time, and we know it's valuable. While our rates are competitive, we get that it might not suit every budget. Being transparent helps us save time for everyone.</p>
            </th>
            {packages.map(cell => (
              <td key={cell.id}>
                <h2>{cell.heading}</h2>
                <p>{cell.desc}</p>
                <div className={styles.priceTag}>
                  <span className={styles.currency}>£</span>
                  {cell.price}
                </div>
                <CtaLight href="/contact">Enquire now</CtaLight>
              </td>
            ))}
          </tr>
          {services.map((service, index) => (
            <tr key={index}>
              <th>
                {formatServiceType(service)}
              </th>
              {packages.map(cell => (
                <td key={cell.id}>
                  <Vector
                    name={cell[service] ? "check" : "uncheck"}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
